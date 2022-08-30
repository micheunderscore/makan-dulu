import { NextApiRequest, NextApiResponse } from "next";

const fs = require("fs");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const example = await fs.readFile("./example.json");
  return res.status(200).json({ example });
}
