"use client";
import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function NewInvoiceButton(props: { saveInvoice: (a:number) => Promise<any> }) {
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
        props.saveInvoice(77).then((res) => {
            console.log(res);
          router.push(`/invoice/${res.id}`);
        });
      }}
    >
      New
    </Button>
  );
}
