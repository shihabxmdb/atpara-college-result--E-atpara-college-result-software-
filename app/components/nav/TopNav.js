import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function TopNav() {
  const { data, status } = useSession();
  console.log(data, status);

  return (
    <nav className="nav bg-[#475569] text-white text-xl flex mx-auto shadow-lg p-6 justify-between mb-3">
      <Link className="nav-link" href="/">
        🏫
      </Link>
      <div className="flex ">
        <Link className="nav-link px-5 hover:text-[#FF5833]" href="/contactUs">
          Contact Us
        </Link>
        {status === "authenticated" ? (
          <div className="flex">
            <Link
              className="nav-link"
              href={`/dashboard/${
                data?.user?.role === "admin" ? "admin" : "user"
              }`}
            >
              {data.user.name} ({data?.user?.role})
            </Link>

            <a
              className="nav-link pointer"
              onClick={() => signOut({ callbackUrl: "/login" })}
            >
              Logout
            </a>
          </div>
        ) : (
          <div className="flex">
            <Link className="nav-link" href="/login">
              Login
            </Link>
            <Link className="nav-link" href="/register">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
