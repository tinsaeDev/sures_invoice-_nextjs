"use client";
import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { newInvoice } from "./newInvoice";
import { Invoice } from "@prisma/client";

export function NewInvoiceButton() {
  const router = useRouter();
  const [clicked, setisClicked] = useState(false);
  return (
    <Button
      disabled={clicked}
      startIcon={<Add />}
      size="small"
      variant="contained"
      onClick={() => {
        setisClicked(true);
        newInvoice().then((res:Invoice) => {
          router.push(`/u/invoice/${res.id}`);
        });
      }}
    >
      New
    </Button>
  );
}
