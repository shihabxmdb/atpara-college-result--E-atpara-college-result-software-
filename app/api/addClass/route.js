import { NextResponse } from "next/server";
import dbConnect from "@/app/utils/dbConnect";
import ClassName from "@/app/models/classname";

export async function POST(req) {
  const body = await req.json();
  console.log("body in addsubject api => ", body);
  await dbConnect();
  try {
    const { className2 } = body;
    await new ClassName({
      className2,
    }).save();

    return NextResponse.json({ success: "ClassName Created Successfully" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}

export async function GET(req) {
  await dbConnect();
  try {
    const classes = await ClassName.find({}).sort({ createdAt: "-1" });
    return NextResponse.json(classes);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}
