import {
  emailNewUserAcctSubject,
  emailOtpSubject,
  env,
} from "../config/index.js";

const otpMailBody = (otp) => {
  return `<p>Your email verification OTP is</p>
                        <h2>${otp}</h2>
                        <p>This OTP will expire in ${Number(env.OTP_TTL) / 60} minutes.</p>
                        <p>If you didn't request this, please contact your admin.</p>
                    `;
};

const newUserMailBody = (fullName, email) => {
  return `<p>Welcome ${fullName || "user"},</p>
        <br>
        <p>Your account has been created successfully.</p>
        ${email && `<h3>email: ${email}</h3>`}
        <p>Please login.</p>
        <button>Login</button>`;
};

const generateEmailStructure = (value) => {
  const { eventType, email } = value;

  switch (eventType) {
    case "SEND_OTP":
      if (!value.otp) throw new Error("OTP is not present");
      
      return {
        email,
        subject: emailOtpSubject,
        body: otpMailBody(value.otp),
      };

    case "NEW_USER_ACC":
      if (!value.email) throw new Error("email is not present");

      return {
        email,
        subject: emailNewUserAcctSubject,
        body: newUserMailBody(value.fullName, value.email),
      };

    default:
      return "";
  }
};

export default generateEmailStructure;
