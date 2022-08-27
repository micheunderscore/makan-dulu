import { NextApiRequest, NextApiResponse } from "next";
import Shopify from "root/src/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const shop = req.query.shop;

  if (!shop) {
    res.redirect("/login");
  }

  const authRoute = await Shopify.Auth.beginAuth(
    req,
    res,
    shop,
    "/api/auth/offline-callback",
    false
  );

  res.redirect(authRoute);
}
