import { ObjectId, Schema, model, models } from "mongoose";

interface IInventory {
  _id: ObjectId;
  userId: ObjectId;
  characterId: ObjectId;
  quantity: number;
  obtainedAt: Date;
}

const InventorySchema = new Schema<IInventory>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    characterId: {
      type: Schema.Types.ObjectId,
      ref: "Character",
      required: true,
    },
    quantity: { type: Number, default: 1 },
    obtainedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default models.Inventory ??
  model<IInventory>("Inventory", InventorySchema);
