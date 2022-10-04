import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@configs/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case "GET":
      // Get data from your database
      try {
        const data = await prisma.patient.findMany();
        res.status(200).json(data);
      } catch (error) {
        console.error("[GET_ALL_USERS]", error);
        res.status(400).json({ error });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
