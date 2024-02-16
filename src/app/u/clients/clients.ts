import { prisma } from "@/lib/db";
import getUser from "@/lib/user";
import { User, client } from "@prisma/client";

export async function getClients(): Promise<client[]> {
  const user: User = await getUser();
  const clients: client[] = await prisma.client.findMany({
    where: {
      userId: user.id,
    },
  });

  return clients;
}
