import {createTransport} from 'nodemailer'
import { env } from './env.js'

export const mailer = createTransport({
    host:env.SMTP_SERVER,
    port:env.SMTP_PORT,
    secure:false,
    auth:{
        user:env.SMTP_LOGIN,
        pass:env.SMTP_KEY
    }
})