"use server";

import { prisma } from "@/lib/db";
import getUser from "@/lib/user";
import { Invoice, User } from "@prisma/client";

export async function saveInvoice(values: Invoice) {
  const user: User = await getUser();


  delete values.items;
  const updatedInvoice = await prisma.invoice.update({
    where: {
      userId: user.id,
      id: values.id,
    },
    data: {
      ...values,
      
    },
  });

  return updatedInvoice;
}
