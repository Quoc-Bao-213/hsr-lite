import { ObjectId, Schema, model, models } from "mongoose";

export type TransactionType = "purchase" | "spend";
export type TransactionStatus = "pending" | "completed" | "failed";

interface ITransaction {
  _id: ObjectId;
  userId: ObjectId;
  type: TransactionType;
  amount: number;
  currency: string;
  stripeSessionId?: string;
  status: TransactionStatus;
  createdAt: Date;
  updatedAt: Date;
}

const TransactionSchema = new Schema<ITransaction>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, enum: ["purchase", "spend"], required: true },
    amount: { type: Number, required: true },
    currency: { type: String, default: "stellarJade" },
    stripeSessionId: { type: String },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default models.Transaction ??
  model<ITransaction>("Transaction", TransactionSchema);
