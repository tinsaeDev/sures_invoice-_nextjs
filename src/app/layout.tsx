import React from "react";

export const metadata = {
  title: "Invoice",
  description: "Invoice Generator",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
