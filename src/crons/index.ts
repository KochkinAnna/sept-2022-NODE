import { removedOldPasswords } from "./remove.old.passwords.cron";
import { removedOldTokens } from "./remove.old.tokens.cron";

export const cronRunner = () => {
  removedOldTokens.start();
  removedOldPasswords.start();
};
