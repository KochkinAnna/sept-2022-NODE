import path from "node:path";

import EmailTamplates from "email-templates";
import nodemailer, { Transporter } from "nodemailer";

import { configs } from "../configs";
import { allTemplates } from "../constance";
import { EmailActions } from "../enums";

class Emailervice {
  private transporter: Transporter;
  private templateParser;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: configs.NO_REPLY_EMAIL,
        pass: configs.NO_REPLY_EMAIL_PASSWORD,
      },
    });

    this.templateParser = new EmailTamplates({
      views: {
        root: path.join(process.cwd(), "src", "statics"),
        options: {
          extension: "hbs",
        },
      },
      juice: true,
      juiceResources: {
        webResources: {
          relativeTo: path.join(process.cwd(), "src", "statics", "css"),
        },
      },
    });
  }

  public async sendMail(
    email: string,
    emailAction: EmailActions,
    locals: Record<string, string>
  ) {
    const teplateInfo = allTemplates[emailAction];
    locals.front_URL = configs.FRONT_URL;
    const html = await this.templateParser.render(
      teplateInfo.templateName,
      locals
    );

    return this.transporter.sendMail({
      from: "No reply",
      to: email,
      subject: teplateInfo.subject,
      html,
    });
  }
}

export const emailService = new Emailervice();
