"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function AddSession() {
  const [session_name, setSession_name] = useState("");

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      console.log("before response");
      const response = await fetch(`${process.env.API}/addSession`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          session_name,
        }),
      });
      const data = await response.json();
      console.log("data=", data);
      if (!response.ok) {
        toast.error(data.err);
        console.log("!response.ok");
        setLoading(false);
      } else {
        toast.success(data.success);
        setSession_name("");

        console.log("!response.ok else");
        router.push("/dashboard/admin/addSession");
      }
    } catch (err) {
      console.log(err);
      console.log("catch(err)");
      //toast.error(data.err);
      setLoading(false);
    }
  };
  return (
    <div className="h-[410px] place-content-center ">
      <h1 className=" mb-5">Add Session</h1>
      <div className="justify-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={session_name}
            onChange={(e) => setSession_name(e.target.value)}
            placeholder="Session Name"
            className="p-2 mb-2"
          />
          <br />

          <br />
          <button type="submit" className="bg-green-400">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddSession;
