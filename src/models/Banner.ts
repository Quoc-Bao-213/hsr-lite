import { ObjectId, Schema, model, models } from "mongoose";

interface IBanner {
  _id: ObjectId;
  name: string;
  startDate: Date;
  endDate: Date;
  featuredCharacters: ObjectId[];
  baseDropRates: Record<string, number>;
  pitySettings: {
    fiveStar: number;
    fourStar: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

const BannerSchema = new Schema<IBanner>(
  {
    name: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    featuredCharacters: [{ type: Schema.Types.ObjectId, ref: "Character" }],
    baseDropRates: { type: Map, of: Number, required: true },
    pitySettings: {
      fiveStar: { type: Number, required: true },
      fourStar: { type: Number, required: true },
    },
  },
  { timestamps: true }
);

export default models.Banner ?? model<IBanner>("Banner", BannerSchema);
