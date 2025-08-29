import { ObjectId, Schema, model, models } from "mongoose";

interface ICharacter {
  _id: ObjectId;
  name: string;
  rarity: number;
  bannerId: ObjectId;
  dropRate: number;
  image: string;
  element: string;
  createdAt: Date;
}

const CharacterSchema = new Schema<ICharacter>(
  {
    name: { type: String, required: true },
    rarity: { type: Number, required: true },
    bannerId: { type: Schema.Types.ObjectId, ref: "Banner", required: true },
    dropRate: { type: Number, required: true },
    image: { type: String, required: true },
    element: { type: String, required: true },
  },
  { timestamps: true }
);

export default models.Character ??
  model<ICharacter>("Character", CharacterSchema);
