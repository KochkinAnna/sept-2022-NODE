import { ESmsActions } from "../enums";

export const smsTemplates: { [key: string]: string } = {
  [ESmsActions.WELCOME]: "Great to see You in our APP",
  [ESmsActions.FORGOT_PAWORD]:
    "We control Your password, just follow all steps",
};
