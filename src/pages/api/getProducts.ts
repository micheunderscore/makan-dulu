import { sfConn } from "context/index";
import { NextApiRequest, NextApiResponse } from "next";

interface Data {
  products(first: 10): {
    edges: {
      node: {
        description: string;
        title: string;
      };
    };
  };
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  let result;
  const isTypeNull = req.query.type == null ? true : false;

  if (isTypeNull) res.status(400);

  await sfConn(req, res).query<Data>({
    data: `{
        products(first: 10): {
            edges: {
                node: {
                    description
                    title
                }
            }
        }
    }`,
  });
};

export default handler;
