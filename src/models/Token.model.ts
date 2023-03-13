import { model, Schema, Types } from "mongoose";

import { User } from "./User.model";

const tokenSchema = new Schema({
  _user_id: {
    type: Types.ObjectId,
    required: true,
    ref: User,
  },
  accessToken: {
    type: String,
    required: true,
  },
  refreshToken: {
    accessToken: {
      type: String,
      required: true,
    },
  },
});

export const Token = model("Token", tokenSchema);
