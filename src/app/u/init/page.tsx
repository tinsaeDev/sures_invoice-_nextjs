import { prisma } from "@/lib/db";
import { Typography } from "@mui/material";
import { User } from "@prisma/client";
export default async function Init() {
  const newUser: User = await prisma.user.create({
    data: {
      email: "dumy@ff.com",
      name: "Dummy",
    },
  });

  // Create Default Values
  await prisma.defaultValues.create({
    data: {
      userId: newUser.id,
      currency_code: "INR",
      tax_rate: 15,
      terms:
        "Please note that payment is due within 30 days of the invoice date. You can pay by check, credit card, or bank transfer",
      note: "Thank you for your continued business. We value your trust and feedback.",

      // Lales
      AMOUNT_PAID_lbl: "Amount Paid",
      BALANCE_DUE_lbl: "Balance Due",
      BILL_TO_lbl: "Bill to",
      DATE_PREPARED_lbl: "Date Prepared",
      DISCOUNT_lbl: "Discount",
      DUE_DATE_lbl: "Due Date",
      FROM_lbl: "From",

      INVOICE_lbl: "",
      LINK_lbl: "Link",
      NOTE_lbl: "Note",
      PAYMENT_TERMS_lbl: "Payment Terms",
      PO_lbl: "PO",
      QR_lbl: "QR code",
      SHIPPED_TO_lbl: "",
      SHIPPING_lbl: "Shipping Fee",
      SIGNATURE_lbl: "Signature",
      SUB_TOTAL_lbl: "Sub Total",
      TABLE_AMOUNT_lbl: "Amount",
      TABLE_ITEM_lbl: "Item",
      TABLE_QTY_lbl: "QTY",
      TABLE_RATE_lbl: "Rate",
      TAX_RATE_lbl: "Tax",
      TERMS_lbl: "Terms",
      TOTAL_lbl: "Total",
    },
  });

  // Create keys
  return (
    <Typography variant="h1" color="primary">
      {" "}
      Heloo{" "}
    </Typography>
  );
}
