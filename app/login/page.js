// app/login/page
"use client";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

import { set } from "mongoose";
import { useState } from "react";
//import { FormEvent } from "react";
import toast from "react-hot-toast";

export default function Register() {
  const [email, setEmail] = useState("hasan@gmail.com");
  const [password, setPassword] = useState("hsn");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);
    if (result?.error) {
      toast.error(result?.error);
    } else {
      toast.success("Login success");
      router.push(callbackUrl);
    }
  };

  return (
    <main>
      <div className="container">
        <div className="row flex justify-content-center align-items-center vh-100">
          <div className="col-lg-5 bg-light p-5 shadow">
            <h2 className="mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mb-4"
                placeholder="Your email"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mb-4"
                placeholder="Your password"
              />
              <button
                className="btn btn-primary btn-raised"
                disabled={loading || !email || !password}
              >
                {loading ? "Please wait.." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
