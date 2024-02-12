"use client";
import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { saveInvoice } from "./saveInvoice";

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
        saveInvoice(77).then((res) => {
            console.log(res);
          router.push(`/invoice/${res.id}`);
        });
      }}
    >
      New
    </Button>
  );
}
