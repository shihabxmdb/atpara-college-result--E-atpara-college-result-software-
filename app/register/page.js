// app/register/page.js
"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Register() {
  const [name, setName] = useState("Ryan");
  const [email, setEmail] = useState("ryan@gmail.com");
  const [password, setPassword] = useState("rrrrrr");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      console.log("before response");
      const response = await fetch(`${process.env.API}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const data = await response.json();
      console.log("data=",data);
      if (!response.ok) {
        toast.error(data.err);
        console.log("!response.ok");
        setLoading(false);
      } else {
        toast.success(data.success);
        console.log("!response.ok else");
        router.push("/login");
      }
    } catch (err) {
      console.log(err);
      console.log("catch(err)");
      //toast.error(data.err);
      setLoading(false);
    }
  };

  return (
    <main className="min-h-[415px]">
      <div>
        <div className="grid place-content-center">
          <h1 className="mt-10 grid text-3xl place-content-center">
            Please Register...
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" mt-8 mb-4 p-2 rounded"
              placeholder="Your name"
            />
            <br />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" mb-4 p-2 rounded"
              placeholder="Your email"
            />
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" mb-4 p-2  rounded"
              placeholder="Your Password"
            />
            <br />
            <button
              className="bg-blue-500 p-2 rounded border-radius "
              disabled={loading || !name || !email || !password}
            >
              {loading ? "Please wait.." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
