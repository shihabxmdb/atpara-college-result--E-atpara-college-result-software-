"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function AddExam() {
  const [examname, setExamname] = useState("");

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      console.log("before response");
      const response = await fetch(`${process.env.API}/addExam`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          examname,
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
        setExamname("");

        console.log("!response.ok else");
        router.push("/dashboard/admin/addExam");
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
      <h1 className=" mb-5">Add Exam Name</h1>
      <div className="justify-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={examname}
            onChange={(e) => setExamname(e.target.value)}
            placeholder="Exam Name"
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

export default AddExam;
