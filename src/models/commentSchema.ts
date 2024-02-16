import mongoose,{ Schema, models, model, Document, ObjectId } from "mongoose";
interface IComment extends Document{
    userId:ObjectId;
    postId:ObjectId;
    comment:String;

}
const commentSchema = new Schema<IComment>(
    {
        userId: { type: Schema.Types.ObjectId, ref: "users", required: true },
        postId: { type: Schema.Types.ObjectId, ref: "posts", required: true },
        comment: { type: Schema.Types.String, required: true },
    },
    { timestamps: true }
);
 const CommentModel =
    mongoose.models.comments || model<IComment>("comments", commentSchema);
export default CommentModel;