import { ObjectId, Schema, model, models } from "mongoose";

interface IRoll {
  _id: ObjectId;
  userId: ObjectId;
  bannerId: ObjectId;
  characterId: ObjectId;
  rarity: number;
  rollAt: Date;
  cost: number;
}

const RollSchema = new Schema<IRoll>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    bannerId: { type: Schema.Types.ObjectId, ref: "Banner", required: true },
    characterId: {
      type: Schema.Types.ObjectId,
      ref: "Character",
      required: true,
    },
    rarity: { type: Number, required: true },
    rollAt: { type: Date, default: Date.now },
    cost: { type: Number, required: true },
  },
  { timestamps: true }
);

export default models.Roll ?? model<IRoll>("Roll", RollSchema);
