import React from "react";
import { useRouter } from "next/router";

/* add in logic to determine if admin or community navbar should be displayed */
export default function RootLayout({ children }) {
  const router = useRouter();

  return <div className="flex flex-row">{children}</div>;
}
