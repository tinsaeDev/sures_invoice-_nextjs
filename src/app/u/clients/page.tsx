import { prisma } from "@/lib/db";
import getUser from "@/lib/user";
import { User } from "@prisma/client";
import ClientsTable from "./ClientsTable";

export default async function ClientsPage() {
  const user: User = await getUser();
  const clients: Client[] = await prisma.client.findMany({
    where: {
      userId: user.id,
    },
  });
  return <ClientsTable clients={clients} />;
}
