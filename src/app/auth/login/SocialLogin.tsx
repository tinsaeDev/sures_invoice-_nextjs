"use client";
import { Google } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import { signIn } from "next-auth/react";

export default function SocialLogin() {
  return (
    <Stack>
      <Button
        startIcon={<Google />}
        onClick={() => {
          signIn("google", {
            redirect: true,
            callbackUrl: "/u",            
          });
        }}
      >
        Login Wuth Google
      </Button>
    </Stack>
  );
}
