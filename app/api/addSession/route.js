import { NextResponse } from "next/server";
import dbConnect from "@/app/utils/dbConnect";
import SessionName from "@/app/models/session";
export async function POST(req) {
  const body = await req.json();
  console.log("body in addSession api => ", body);
  await dbConnect();
  try {
    const { session_name } = body;
    await new SessionName({
      session_name,
    }).save();

    return NextResponse.json({ success: "Session Created Successfully" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}

export async function GET(req) {
  await dbConnect();
  try {
    const sessionYears = await SessionName.find({}).sort({ createdAt: "-1" });
    return NextResponse.json(sessionYears);
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
