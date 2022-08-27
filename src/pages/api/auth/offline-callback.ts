import { NextApiRequest, NextApiResponse } from "next";
import Shopify from "root/src/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const session = await Shopify.Auth.validateAuthCallback(
      req,
      res,
      req.query
    );
  } catch (error) {
    console.log(error);
  }

  res.redirect(`/api/auth/?host=${req.query.host}&shop=${req.query.shop}`);
}
