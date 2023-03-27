import { config } from "dotenv";

config();

export const constants = {
  SALT: process.env.PASSWORD_SALT,
};
