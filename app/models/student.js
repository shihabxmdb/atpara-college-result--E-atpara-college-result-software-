// models/user
import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
const studentSchema = new mongoose.Schema(
  {
    roll: {
      type: "number",
      required: [true, "Please enter Student Roll"],

      minLength: 1,
      maxLength: 10,
    },
    name: {
      type: String,
      required: [true, "Please enter Student Name"],
      trim: true,

      minLength: 3,
      maxLength: 40,
    },
    session: {
      type: String,
      required: [true, "Please enter Session"],
      minLength: 1,
      maxLength: 10,
    },
    classname: {
      type: String,
      required: [true, "Please enter Student Name"],
      trim: true,

      minLength: 3,
      maxLength: 40,
    },

    subject: {
      type: Array,
      //required: [true, "Please enter all Subjects"],
      minLength: 1,
      maxLength: 7,
    },
  },
  { timestamps: true }
);
studentSchema.plugin(uniqueValidator);
export default mongoose.models.Student ||
  mongoose.model("Student", studentSchema);
