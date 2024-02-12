// page.tsx

"use server";

import { Container, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { PrismaClient } from "@prisma/client";
import InvoiceCard from "./InvoiceCard";
import { NewInvoiceButton } from "./NewInvoiceButton";
// import { prisma } from "@/lib/db";

const prisma = new PrismaClient();


export default async function InvoiceDashboadPage() {
  const invoices: Invoice[] = await prisma.invoice.findMany({
    where: {
      id: 1,
    },
  });

  const setting: Setting = await prisma.setting.findFirst({
    where: {
      id: 1,
    },
  });

  const templateLabels: TemplateLabels = await prisma.labels.findFirst({
    where: {
      id: 1,
    },
  });

  const companyInfo = {
    company_name: setting?.company_name,
  } || "Null" ;

  return (
    <Container maxWidth="xl">
      <Paper sx={{ p: 3 }}>
        <Stack>
          <Typography variant="subtitle2" fontWeight="bold">
            Welcome, {companyInfo.company_name} 👋
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
