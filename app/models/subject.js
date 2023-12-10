// models/user
import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
const subjectSchema = new mongoose.Schema(
  {
    subname: {
      type: String,
      required: [true, "Please enter subject name"],
      trim: true,
      unique: true,
      minLength: 1,
      maxLength: 20,
    },
    subcode: {
      type: "number",
      required: [true, "Please enter subject code"],

      unique: true,
      trim: true,
      minLength: 1,
      maxLength: 10,
    },
    cq: {
      type: "number",
      required: [true, "Please enter cq number"],
      minLength: 1,
      maxLength: 4,
    },
    mcq: {
      type: "number",
      required: [true, "Please enter mcq number"],
      minLength: 1,
      maxLength: 4,
    },
    practical: {
      type: "number",
      required: [true, "Please enter Practical Number"],
      minLength: 1,
      maxLength: 4,
    },
  },
  { timestamps: true }
);
subjectSchema.plugin(uniqueValidator);
export default mongoose.models.Subject ||
  mongoose.model("Subject", subjectSchema);
