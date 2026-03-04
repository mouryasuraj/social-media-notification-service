import { sentMailHandler } from "../handler/sentMailHandler.js";

export const emailOtpSubject = "Verify your email"
export const emailNewUserAcctSubject = "Account Created Successfully"


export const TOPICS = {
  MAIL_ALERT:'mail-alert'
};


export const handlers = {
    [TOPICS.MAIL_ALERT]:sentMailHandler
}