import { prisma } from "@/lib/db";
import InvoiceForm from "./InvoiceForm";
import { Setting, Client } from "@prisma/client";
import getUser from "@/lib/user";

export default async function InvoicePage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const user = getUser();
  const invoice: Invoice = await prisma.invoice.findFirstOrThrow({
    where: {
      id: Number.parseInt(params.id),
    },
    include: {
      items: true,
    },
  });

  const settings: Setting = await prisma.setting.findFirstOrThrow({
    where: {
      userId: user.id,
    },
  });

  const clients: Client[] = await prisma.client.findMany({
    where: {
      userId: user.id,
    },
  });

  return (
    <InvoiceForm invoice={invoice} settings={settings} clients={clients} />
  );
}
