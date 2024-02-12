"use client";
import { Box } from "@mui/material";
import { ReactNode } from "react";
import { handleSubmit } from "./handleSubmit";

export default function FormWrapper(props: { children: ReactNode }) {
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      {props.children}
    </Box>
  );
}
