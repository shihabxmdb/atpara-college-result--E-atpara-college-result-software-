// app/dashboard/admin/layout
import Link from "next/link";
import AdminNav from "@/app/components/nav/AdminNav";
export default function AdminLayout({ children }) {
  return (
    <>
      <AdminNav />
      {children}
    </>
  );
}
