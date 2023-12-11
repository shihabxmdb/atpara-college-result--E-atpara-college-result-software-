"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSessionYear } from "../../../../context/session";
import { useClass } from "../../../../context/class";

function AddStudent() {
  const [roll, setRoll] = useState();
  const [name, setName] = useState();
  const [session, setSession] = useState();
  const [classname, setClassname] = useState();
  const [subject, setSubject] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { sessionYears, fetchSession } = useSessionYear();
  const { classes, fetchClass } = useClass();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      console.log("before response");
      const response = await fetch(`${process.env.API}/addStudent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          roll,
          name,
          session,
          classname,
          subject,
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
        setRoll("");
        setName("");
        //setSession("");
        setClassname("");
        setSubject("");

        console.log("!response.ok else");
        router.push("/dashboard/admin/addStudent");
      }
    } catch (err) {
      console.log(err);
      console.log("catch(err)");
      //toast.error(data.err);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchSession();
  }, []);

  useEffect(() => {
    fetchClass();
  }, []);

  return (
    <div className="h-[410px] place-content-center ">
      <h1 className=" mb-5">Add Student</h1>
      <div className="justify-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            placeholder="Roll"
            className="p-2 mb-2"
          />
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="p-2 mb-2"
          />
          <br />

          <label>Select Session</label>
          <br />
          <select name="session" 
           onChange={(e) => setSession(e.target.value)}>
            <option value="">Select one</option>
            {sessionYears.length > 0 &&
              sessionYears.map((c) => (
                <option key={c._id} value={c.session_name} selected={c._id}>
                  {c.session_name}
                </option>
              ))}
          </select>

          <br />

          <label>Select Class</label>
          <br />

          <select name="class" onChange={(e) => setClassname(e.target.value)}>
            <option value="">Select one</option>
            {classes.length > 0 &&
              classes.map((c) => (
                <option key={c._id} value={c.className2} selected={c._id}>
                  {c.className2}
                </option>
              ))}
          </select>

          <br />
          <button type="submit" className="bg-green-400">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
