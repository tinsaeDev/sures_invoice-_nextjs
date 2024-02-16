import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "./db";
import { User } from "@prisma/client";

export default async function getUser(): User {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/login");
  }

  const user: User = prisma.user.findFirstOrThrow({
    where: {
      email: session.user.email as string,
    },
  });

  return user;
}
