import { ObjectId, Schema, model, models } from "mongoose";

export type EventType = "daily-login" | "quest";

export interface IEvent {
  _id: ObjectId;
  userId: ObjectId;
  eventType: EventType;
  reward: {
    stellarJade?: number;
  };
  claimedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema = new Schema<IEvent>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    eventType: {
      type: String,
      enum: ["daily-login", "quest"],
      required: true,
    },
    reward: { type: Object, required: true },
    claimedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default models.Event ?? model<IEvent>("Event", EventSchema);
