import { NextResponse } from "next/server";
import dbConnect from "@/app/utils/dbConnect";
import Exam_Number from "@/app/models/exam_number";
export async function POST(req) {
  const body = await req.json();
  console.log("body in Exam_Number api => ", body);
  await dbConnect();
  try {
    const { roll,name,classname,session,exam,subnumber } = body;
    await new Exam_Number({
        roll,name,classname,session,exam,subnumber
    }).save();

    return NextResponse.json({ success: "Exam_Number Created Successfully" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}
