import { Twilio } from "twilio";

import { configs } from "../configs";
import { smsTemplates } from "../constance";
import { ESmsActions } from "../enums";

class SmsService {
  constructor(
    private client = new Twilio(
      configs.TWILIO_ACCOUNT_SID,
      configs.TWILIO_ACCOUNT_AUTH_TOKEN
    )
  ) {}

  public async sendSms(phone: string, smsAvtion: ESmsActions) {
    try {
      const message = smsTemplates[smsAvtion];
      await this.client.messages.create({
        body: message,
        to: phone,
        messagingServiceSid: configs.TWILIO_MESSAGING_SERVICE_SID,
      });
    } catch (e) {
      console.error(e.message, e.status);
    }
  }
}

export const smsService = new SmsService();
