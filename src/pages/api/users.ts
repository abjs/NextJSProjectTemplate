import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
type Data = {
  Users?: any;
  susses: boolean;
  messages?: string ;
  error?: any;
};
const userExists: any = (username: string) => {
  return prisma.user.findUnique({
    where: {
      username,
    },
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { username } = req.body;
  const method = req.method;
  try {
    if (method === "GET") {
      const Users = await prisma.user.findMany();
      res.status(200).json({ Users, susses: true, messages: "GET" });
    } else if (method === "POST") {
      const exists = await userExists(username);
      if (exists) {
        res
          .status(400)
          .json({ Users: [], susses: false, messages: "user already exist" });
      } else {
        const newUser = await prisma.user.create({
          data: {
            username,
          },
        });
        res
          .status(200)
          .json({ Users: newUser, susses: false, messages: "POST" });
      }
    } else if (method === "PUT") {
      res.status(200).json({ Users: [], susses: false, messages: "PUT" });
    } else if (method === "DELETE") {
      const exists = await userExists(username);
      if (exists) {
        const user = await prisma.user.delete({
          where: {
            username,
          },
        });
        res
          .status(200)
          .json({ Users: user, susses: true, messages: "DELETE susses" });
      } else {
        res
          .status(400)
          .json({ Users: [], susses: false, messages: "no user  font" });
      }
    } else {
      res.status(400).json({
        Users: [],
        susses: false,
        messages: "method is not GET ,POST ,PUT,DELETE",
      });
    }
  } catch (err) {
    res.status(400).json({
      Users: [],
      susses: false,
      messages: "Invalid",
      error: err,
    });
  }
}
