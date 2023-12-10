// models/user
import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
const classNameSchema = new mongoose.Schema(
  {
    className2: {
      type: String,
      required: [true, "Please enter Class name"],

      unique: true,
      minLength: 3,
      maxLength: 20,
    },
  },
  { timestamps: true }
);
classNameSchema.plugin(uniqueValidator);
export default mongoose.models.Class ||
  mongoose.model("Class", classNameSchema);
