export enum EmailActions {
  WELCOME,
  FORGOT_PAWORD,
}

export const allTemplates = {
  [EmailActions.WELCOME]: {
    subject: "Great to see You in our APP",
    templateName: "register",
  },
  [EmailActions.FORGOT_PAWORD]: {
    subject: "We control Your password, just follow all steps",
    templateName: "forgotPassword",
  },
};
