// page.tsx

"use server";

import { Container, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { PrismaClient } from "@prisma/client";
import InvoiceCard from "./InvoiceCard";
import { NewInvoiceButton } from "./NewInvoiceButton";
import { getServerSession } from "next-auth";
import getUser from "@/lib/user";
// import { prisma } from "@/lib/db";

const prisma = new PrismaClient();

export default async function InvoiceDashboadPage() {
  const user = getUser();

  console.log("Dashboard...");
  const invoices: Invoice[] = await prisma.invoice.findMany({
    where: {
      userId: user.id,
    },
  });

  const setting: Setting = await prisma.setting.findFirst({
    where: {
      id: 1,
    },
  });

  return (
    <Container maxWidth="xl">
      <Paper sx={{ p: 3 }}>
        <Stack>
          <Typography variant="subtitle2" fontWeight="bold">
            Welcome, {user.name} 👋
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Create Invoices seamlessly
          </Typography>
        </Stack>
      </Paper>

      <Stack
        mt={1}
        p={2}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography fontWeight="bold" variant="subtitle1">
          Invoices
        </Typography>
        <NewInvoiceButton />
      </Stack>

      <Grid mt={1} container spacing={2}>
        {invoices.map((inv: Invoice) => {
          return (
            <Grid key={inv.id} xs={12} sm={4}>
              <InvoiceCard invoice={inv} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
