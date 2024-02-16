import mongoose, { Schema, Document, ObjectId } from "mongoose";

interface IPost extends Document {
    title: string;
    content: string;
    postImage: string;
    userId: ObjectId; // Adjust if userId is of a different type
}

const PostSchema = new Schema<IPost>(
    {
        title: { type: Schema.Types.String, required: true },
        content: { type: Schema.Types.String, required: true },
        postImage: { type: Schema.Types.String, required: true },
        userId: { type: Schema.Types.ObjectId, ref: "users", required: true },
    },
    {
        timestamps: true,
    }
);

const PostsModel = mongoose.models.posts || mongoose.model<IPost>("posts", PostSchema);

export default PostsModel;

