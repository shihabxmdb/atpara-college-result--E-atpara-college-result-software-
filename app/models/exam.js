// models/user
import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
const examSchema = new mongoose.Schema(
  {
    examname: {
      type: String,
      required: [true, "Please enter exam name"],
      trim: true,
      unique: true,
      minLength: 4,
      maxLength: 15,
    },
   
  },
  { timestamps: true }
);
examSchema.plugin(uniqueValidator);
export default mongoose.models.Exam ||
  mongoose.model("Exam",examSchema);
