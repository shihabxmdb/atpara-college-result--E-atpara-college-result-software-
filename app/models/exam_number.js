// models/user
import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
const exam_numberSchema = new mongoose.Schema(
  {
    roll: {
      type: "number",
      required: [true, "Please enter Roll"],
      trim: true,
      minLength: 1,
      maxLength: 10,
    },
    name: {
        type: String,
        required: [true, "Please enter Name"],
        trim: true,
        minLength: 3,
        maxLength: 20,
      },
      classname: {
        type:String,
        required: [true, "Please enter classname"],
        trim: true,
        minLength: 3,
        maxLength: 10,
      },
      session: {
        type:String,
        required: [true, "Please enter Session"],
        trim: true,
        minLength: 7,
        maxLength: 10,
      },
      exam: {
        type:String,
        required: [true, "Please enter Exam Name"],
        trim: true,
        minLength: 3,
        maxLength: 15,
      },
      subnumber: {
        type:Array,
        required: [true, "Please enter classname"],
        trim: true,
        
      },

   
  },
  { timestamps: true }
);
exam_numberSchema.plugin(uniqueValidator);
export default mongoose.models.Exam_Number ||
  mongoose.model("Exam_Number", exam_numberSchema);
