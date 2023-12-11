import { NextResponse } from "next/server";
import dbConnect from "@/app/utils/dbConnect";
import Exam from "@/app/models/exam";
export async function POST(req) {
  const body = await req.json();
  console.log("body in addExam api => ", body);
  await dbConnect();
  try {
    const { examname } = body;
    await new Exam({
      examname,
    }).save();

    return NextResponse.json({ success: "Exam Name Created Successfully" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}
