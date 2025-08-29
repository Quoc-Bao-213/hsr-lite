import { ObjectId, Schema, model, models } from "mongoose";

interface IUser {
  _id: ObjectId;
  clerkId: string;
  role: string;
  username: string;
  email: string;
  stellarJade: number;
  pityCounter: number;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    clerkId: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    stellarJade: { type: Number, default: 0 },
    pityCounter: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default models.User ?? model<IUser>("User", UserSchema);
