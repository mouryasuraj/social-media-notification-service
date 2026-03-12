import dotenv from 'dotenv'

dotenv.config({path:`.env.${process?.env?.NODE_ENV || "local"}`})

export const env = {
    PORT:process.env.PORT || 3001,
    KAFKA_BROKER:process.env.KAFKA_BROKER,
    KAFKA_GROUP_ID:process.env.KAFKA_GROUP_ID,
    SMTP_KEY:process.env.SMTP_KEY,
    SMTP_SERVER:process.env.SMTP_SERVER,
    SMTP_PORT:process.env.SMTP_PORT,
    SMTP_LOGIN:process.env.SMTP_LOGIN,
    MAIL_FROM:process.env.MAIL_FROM,
    OTP_TTL:process.env.OTP_TTL,
}