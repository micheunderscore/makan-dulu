import Shopify, { ApiVersion } from "@shopify/shopify-api";
import { AuthQuery } from "@shopify/shopify-api/dist/auth/oauth/types.d";
import http from "http";
import querystring from "querystring";
import url from "url";
require("dotenv").config();

const { API_KEY, API_SECRET_KEY, SCOPES, SHOP, HOST, HOST_SCHEME } =
  process.env;

Shopify.Context.initialize({
  API_KEY,
  API_SECRET_KEY,
  SCOPES: [SCOPES],
  HOST_NAME: HOST.replace(/https?:\/\//, ""),
  HOST_SCHEME,
  IS_EMBEDDED_APP: true,
  API_VERSION: ApiVersion.July22, // all supported versions are available, as well as "unstable" and "unversioned"
});

// Storing the currently active shops in memory will force them to re-login when your server restarts. You should
// persist this object in your app.
const ACTIVE_SHOPIFY_SHOPS: { [key: string]: string | undefined } = {};

async function onRequest(
  request: http.IncomingMessage,
  response: http.ServerResponse
): Promise<void> {
  const { headers, url: req_url } = request;
  const pathName: string | null = url.parse(req_url).pathname;
  const queryString: string = String(url.parse(req_url).query);
  const query: Record<string, any> = querystring.parse(queryString);

  switch (pathName) {
    case "/login":
      // process login action
      try {
        const authRoute = await Shopify.Auth.beginAuth(
          request,
          response,
          SHOP,
          "/auth/callback",
          false
        );

        response.writeHead(302, { Location: authRoute });
        response.end();
      } catch (e) {
        console.log(e);

        response.writeHead(500);
        if (e instanceof Shopify.Errors.ShopifyError) {
          response.end(e.message);
        } else {
          response.end(`Failed to complete OAuth process: ${e.message}`);
        }
      }
      break;
    case "/auth/callback":
      try {
        const session = await Shopify.Auth.validateAuthCallback(
          request,
          response,
          query as AuthQuery
        );
        ACTIVE_SHOPIFY_SHOPS[SHOP] = session.scope;

        console.log(session.accessToken);
        // all good, redirect to '/'
        const searchParams = new URLSearchParams(request.url);
        const host = searchParams.get("host");
        const shop = searchParams.get("shop");
        response.writeHead(302, { Location: `/?host=${host}&shop=${shop}` });
        response.end();
      } catch (e) {
        console.log(e);

        response.writeHead(500);
        if (e instanceof Shopify.Errors.ShopifyError) {
          response.end(e.message);
        } else {
          response.end(`Failed to complete OAuth process: ${e.message}`);
        }
      }
      break;
    default:
      // This shop hasn't been seen yet, go through OAuth to create a session
      if (ACTIVE_SHOPIFY_SHOPS[SHOP] === undefined) {
        // not logged in, redirect to login
        response.writeHead(302, { Location: `/login` });
        response.end();
      } else {
        response.write("Hello world!");
        // Load your app skeleton page with App Bridge, and do something amazing!
      }
      return;
  } // end of default path
} // end of onRequest()

http.createServer(onRequest).listen(3000);
