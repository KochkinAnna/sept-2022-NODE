import {
  EActionTokenType,
  EmailActions,
  ESmsActions,
  EUserStatus,
} from "../enums";
import { ApiError } from "../errors";
import { Action, Token, User } from "../models";
import { ICredentials, ITokenPair, ITokenPayload, IUser } from "../types";
import { emailService } from "./email.service";
import { passwordService } from "./password.service";
import { smsService } from "./sms.service";
import { tokenService } from "./token.service";

class AuthService {
  public async register(body: IUser): Promise<void> {
    try {
      const { password } = body;
      const hashedPassword = await passwordService.hash(password);
      await User.create({
        ...body,
        password: hashedPassword,
      });
      await Promise.all([
        smsService.sendSms(body.phone, ESmsActions.WELCOME),
        emailService.sendMail(
          "kochkinaanichka@gmail.com",
          EmailActions.WELCOME,
          {}
        ),
      ]);
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }

  public async login(
    credentials: ICredentials,
    user: IUser
  ): Promise<ITokenPair> {
    try {
      const isMatched = await passwordService.compare(
        credentials.password,
        user.password
      );
      if (!isMatched) {
        throw new ApiError("Invalid email or password", 404);
      }

      const tokenPair = tokenService.generateTokenPair({
        _id: user._id,
        name: user.name,
      });

      await Token.create({
        _user_id: user._id,
        ...tokenPair,
      });

      return tokenPair;
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }

  public async changePassword(
    userId: string,
    oldPassword: string,
    newPassword: string
  ): Promise<void> {
    try {
      const user = await User.findById(userId);
      const isMatched = await passwordService.compare(
        oldPassword,
        user.password
      );
      if (!isMatched) {
        throw new ApiError("Wrong old password", 400);
      }
      const hashedNewPassword = await passwordService.hash(newPassword);
      await User.updateOne({ _id: user._id }, { password: hashedNewPassword });
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }

  public async refresh(
    tokenInfo: ITokenPair,
    jwtPayload: ITokenPayload
  ): Promise<ITokenPair> {
    try {
      const tokenPair = tokenService.generateTokenPair({
        _id: jwtPayload._id,
        name: jwtPayload.name,
      });

      await Promise.all([
        Token.create({
          _user_id: jwtPayload._id,
          ...tokenPair,
        }),
        Token.deleteOne({
          refreshToken: tokenInfo.refreshToken,
        }),
      ]);

      return tokenPair;
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }

  public async forgotPassword(user: IUser): Promise<void> {
    try {
      const actionToken = tokenService.generateActionToken(
        { _id: user._id },
        EActionTokenType.forgot
      );
      await Action.create({
        actionToken,
        tokenType: EActionTokenType.forgot,
        _user_id: user._id,
      });
      await emailService.sendMail(user.email, EmailActions.FORGOT_PASSWORD, {
        token: actionToken,
      });
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }

  public async setForgotPassword(password: string, id: string): Promise<void> {
    try {
      const hashedPassword = await passwordService.hash(password);
      await User.updateOne({ _id: id }, { password: hashedPassword });
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }

  public async sendActivateToken(user: IUser): Promise<void> {
    try {
      const actionToken = tokenService.generateActionToken(
        { _id: user._id },
        EActionTokenType.activate
      );
      await Action.create({
        actionToken,
        tokenType: EActionTokenType.activate,
        _user_id: user._id,
      });
      await emailService.sendMail(user.email, EmailActions.ACTIVATE, {
        token: actionToken,
      });
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }

  public async activate(userId: string): Promise<void> {
    try {
      await User.updateOne(
        { _id: userId },
        { $set: { status: EUserStatus.active } }
      );
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }
}

export const authService = new AuthService();
