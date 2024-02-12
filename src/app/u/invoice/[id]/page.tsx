import { prisma } from "@/lib/db";
import InvoiceForm from "./InvoiceForm";
export default async function InvoicePage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  console.log("Paaaram", params);

  const invoice: Invoice = await prisma.invoice.findFirstOrThrow({
    where: {
      id: 1,
    },
    include:{
      items:true,

    }
  });

  console.log("IIIIII",invoice)
  return <InvoiceForm invoice={invoice} />;
}
