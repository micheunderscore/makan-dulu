import Shopify, { ApiVersion } from "@shopify/shopify-api";
// import webhooks from "webhooks/index";
require("dotenv").config();

Shopify.Context.initialize({
  API_KEY: process.env.API_KEY,
  API_SECRET_KEY: process.env.API_SECRET_KEY,
  SCOPES: [process.env.SCOPES],
  HOST_NAME: process.env.HOST,
  // HOST_NAME: process.env.HOST.replace(/https?:\/\//, ""),
  // HOST_SCHEME: process.env.HOST_SCHEME,
  IS_EMBEDDED_APP: false,
  API_VERSION: ApiVersion.April22,
});

// Shopify.Webhooks.Registry.addHandlers(webhooks);

export default Shopify;
