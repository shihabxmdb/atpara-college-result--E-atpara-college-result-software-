// models/user
import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
const sessionSchema = new mongoose.Schema(
  {
    session_name: {
      type: String,
      required: [true, "Please enter session name"],
      trim: true,
      unique: true,
      minLength: 4,
      maxLength: 10,
    },
  },
  { timestamps: true }
);
sessionSchema.plugin(uniqueValidator);
export default mongoose.models.Session ||
  mongoose.model("Session", sessionSchema);
