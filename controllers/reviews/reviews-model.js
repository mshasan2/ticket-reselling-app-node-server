import mongoose from "mongoose";
import reviewSchema from "./reviews-schema.js";
const ReviewModel = mongoose.model("Review", reviewSchema);
export default ReviewModel;