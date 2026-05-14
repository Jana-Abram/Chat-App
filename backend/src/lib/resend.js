import { Resend } from 'resend';
import { ENV } from "./env.js";

export const resendClient = new Resend(ENV.RESEND_API_KEY);

export const sender = {
    email: ENV.EMAIL_FROM,
    name: ENV.env.EMAIL_FROM_NAME,
};