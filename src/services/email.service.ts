import EmailTamplates from "email-templates";
import nodemailer, { Transporter } from "nodemailer";
import * as path from "path";

import { configs } from "../configs";
import { allTemplates, EmailActions } from "../constance/email.constants";

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

  public async sendMail(email: string, emailAction: EmailActions) {
    const teplateInfo = allTemplates[emailAction];
    const html = await this.templateParser.render(teplateInfo.templateName);

    return this.transporter.sendMail({
      from: "No reply",
      to: email,
      subject: teplateInfo.subject,
      html: html,
    });
  }
}

export const emailService = new Emailervice();
