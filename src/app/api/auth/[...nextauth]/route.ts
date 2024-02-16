// imports
import { prisma } from "@/lib/db";
import { User } from "@prisma/client";
import NextAuth from "next-auth";

// importing providers
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    signIn: async ({ account, profile }) => {
      if (!account || !profile) {
        throw new Error("Account and Profile cannot be null");
      }

      const existingUser = await prisma.user.findUnique({
        where: { email: profile.email },
      });

      if (!existingUser) {
        // Create new user with profile data
        const newUser: User = await prisma.user.create({
          data: {
            email: profile.email || "",
            name: profile.name,
          },
        });

        // // Create Default Values
        // await prisma.defaultValues.create({
        //   data: {
        //     userId: newUser.id,
        //     currency_code: "INR",
        //     tax_rate: 15,
        //     terms:
        //       "Please note that payment is due within 30 days of the invoice date. You can pay by check, credit card, or bank transfer",
        //     note: "Thank you for your continued business. We value your trust and feedback.",

        //     // Lales
        //     AMOUNT_PAID_lbl: "Amount Paid",
        //     BALANCE_DUE_lbl: "Balance Due",
        //     BILL_TO_lbl: "Bill to",
        //     DATE_PREPARED_lbl: "Date Prepared",
        //     DISCOUNT_lbl: "Discount",
        //     DUE_DATE_lbl: "Due Date",
        //     FROM_lbl: "From",

        //     invoice_lbl: "",
        //     LINK_lbl: "Link",
        //     NOTE_lbl: "Note",
        //     PAYMENT_TERMS_lbl: "Payment Terms",
        //     PO_lbl: "PO",
        //     QR_lbl: "QR code",
        //     SHIPPED_TO_lbl: "",
        //     SHIPPING_lbl: "Shipping Fee",
        //     SIGNATURE_lbl: "Signature",
        //     SUB_TOTAL_lbl: "Sub Total",
        //     TABLE_AMOUNT_lbl: "Amount",
        //     TABLE_ITEM_lbl: "Item",
        //     TABLE_QTY_lbl: "QTY",
        //     TABLE_RATE_lbl: "Rate",
        //     TAX_RATE_lbl: "Tax",
        //     TERMS_lbl: "Terms",
        //     TOTAL_lbl: "Total",

        //   },
        // });

        // Create settings

        await prisma.setting.create({
          data: {
            userId: newUser.id,
            city: "",
            company_name: newUser.name,
            country_code: "IN",
            email: newUser.email,
            postal: "0000",
            state: "",
            street_1: "Street 1",
            street_2: "Street 2",
            website: "",
          },
        });

        // Default values
        // Create lables
      }

      return true; // Allow sign in regardless of user creation
    },

    redirect(_params) {
      return "/u";
    },
  },
});

export { handler as GET, handler as POST };
