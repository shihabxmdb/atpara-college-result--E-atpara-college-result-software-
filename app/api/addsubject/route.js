import { NextResponse } from "next/server";
import dbConnect from "@/app/utils/dbConnect";
import Subject from "@/app/models/subject";
export async function POST(req) {
  const body = await req.json();
  console.log("body in addsubject api => ", body);
  await dbConnect();
  try {
    const { subname, subcode,cq,mcq,practical } = body;
    await new Subject({
      subname,
      subcode,
      cq,
      mcq,
      practical
    }).save();

    return NextResponse.json({ success: "Subject Created Successfully" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}
