"use server";

export async function saveInvoice(a: number): Promise<any> {
  return 1;

  let nextIDInvoice = 1;
  return nextIDInvoice;
  // const savedInvoices = localStorage.getItem("invoices");
  if (invoices.length > 0) {
    const larget: number = Math.max(
      ...invoices.map((inv) => {
        return inv.id;
      })
    );

    nextIDInvoice = larget + 1;
  }

  const invoiceValues: InvoiceValue = {
    //
    id: nextIDInvoice,
    bill_to: "",
    shipped_to: "",

    date_prepared: "",
    payment_terms: "",
    due_date: "",
    po: "",
    link: "",
    qr: null,

    // Table

    items: [
      {
        description: "",
        qty: 1,
        rate: 0,
      },
    ],

    // Total

    discount: 0,
    shipping: 0,
    amount_paid: 0,
  };

  return {
    ...invoiceValues,
    ...templateLabels,
  } as Invoice;
}
