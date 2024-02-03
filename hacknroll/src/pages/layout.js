import React from "react";
import { useRouter } from "next/router";
import AdminNavBar from "@/components/admin/navbar";
import VolunteerNavBar from "@/components/volunteers/navbar";

/* add in logic to determine if admin or community navbar should be displayed */
export default function RootLayout({ children }) {
  const router = useRouter();
  const adminPath = "admin";
  const volunteerPath = "volunteer";

  return (
    <div className="flex flex-row">
      {router.pathname.includes(volunteerPath) ? <VolunteerNavBar /> : <></>}
      {router.pathname.includes(adminPath) ? <AdminNavBar /> : <></>}
      {children}
    </div>
  );
}
