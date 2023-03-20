import { EmailActions } from "../enums";

export const allTemplates: {
  [key: string]: { subject: string; templateName: string };
} = {
  [EmailActions.WELCOME]: {
    subject: "Great to see You in our APP",
    templateName: "register",
  },
  [EmailActions.FORGOT_PASSWORD]: {
    subject: "We control Your password, just follow all steps",
    templateName: "forgotPassword",
  },
  [EmailActions.ACTIVATE]: {
    subject: "Activate Your account",
    templateName: "activate",
  },
};
