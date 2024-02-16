"use server";

import { Invoice } from "@prisma/client";

export async function saveInvoice(values: Invoice) {
  return "YES";
}
