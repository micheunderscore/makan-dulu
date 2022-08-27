import { NextApiRequest, NextApiResponse } from "next";
import Shopify from "root/src/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await Shopify.Utils.graphqlProxy(req, res);
    res.status(200).send(response.body);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
