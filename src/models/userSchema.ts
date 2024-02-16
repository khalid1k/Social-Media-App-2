import mongoose, { Schema, model, Document } from "mongoose";

interface IUser extends Document {
    name: string;
    age: number;
    gender: string;
    email: string;
    password: string;
}

const userSchema = new Schema<IUser>(
    {
        name: { type: Schema.Types.String, required: true },
        age: { type: Schema.Types.Number, required: true },
        gender: { type: Schema.Types.String, required: true },
        email: { type: Schema.Types.String, required: true },
        password: { type: Schema.Types.String, required: true },
    },
    { timestamps: true }
);

const UserModel = mongoose.models.users || model<IUser>("users", userSchema);
export default UserModel;

