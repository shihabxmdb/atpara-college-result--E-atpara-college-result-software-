"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function AddSubject() {
  const [subname, setSubname] = useState("");
  const [subcode, setSubcode] = useState();
  const [cq, setCq] = useState();
  const [mcq, setMcq] = useState();
  const [practical, setPractical] = useState();

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      console.log("before response");
      const response = await fetch(`${process.env.API}/addSubject`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subname,
          subcode,
          cq,
          mcq,
          practical,
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
        setSubname("");
        setSubcode("");
        setCq("");
        setMcq("");
        setPractical("");

        console.log("!response.ok else");
        router.push("/dashboard/admin/addSubject");
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
      <h1 className=" mb-5">Add Subject</h1>
      <div className="justify-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={subname}
            onChange={(e) => setSubname(e.target.value)}
            placeholder="Subject Name"
            className="p-2 mb-2"
          />
          <br />
          <input
            type="number"
            value={subcode}
            onChange={(e) => setSubcode(e.target.value)}
            placeholder="Subject Code"
            className="p-2 mb-2"
          />
          <br />
          <input
            type="number"
            value={cq}
            onChange={(e) => setCq(e.target.value)}
            placeholder="CQ Number"
            className="p-2 mb-2"
          />
          <br />
          <input
            type="number"
            value={mcq}
            onChange={(e) => setMcq(e.target.value)}
            placeholder="MCQ Number"
            className="p-2 mb-2"
          />
          <br />
          <input
            type="number"
            value={practical}
            onChange={(e) => setPractical(e.target.value)}
            placeholder="Practical Number"
            className="p-2 mb-2"
          />
          <br />
          <button type="submit" className="bg-green-400">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddSubject;
