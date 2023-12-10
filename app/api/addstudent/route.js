import { NextResponse } from "next/server";
import dbConnect from "@/app/utils/dbConnect";
import Student from "@/app/models/student";
export async function POST(req) {
  const body = await req.json();
  console.log("body in addStudent api => ", body);
  await dbConnect();
  try {
    const { name, roll, classname, session, subject } = body;
    await new Student({
      name,
      roll,
      classname,
      session,
      subject,
    }).save();

    return NextResponse.json({ success: "Student Created Successfully" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}
