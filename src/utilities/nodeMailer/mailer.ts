import nodemailer from 'nodemailer';
//import { prisma } from '../prisma/db';

enum locations {
  access,
  whitwell,
  jasper,
  cates,
  null,
}

export const transporter = nodemailer.createTransport({
  port: 465,
  auth: {
    user: process.env.NODEMAILER_USERNAME,
    pass: process.env.NODEMAILER_PASSWORD,
  },
  host: 'smtp.gmail.com',
  secure: true,
});

export type mailOptions = {
  to: string;
};

type extendedMailOptions = mailOptions & {
  from?: string;
  subject?: string;
  text?: string;
};

const extendMailType = (options: mailOptions): extendedMailOptions => {
  return {
    ...options,
    subject: undefined,
    text: undefined,
  };
};

export const sendMail = async (options: mailOptions, subject: string) => {
  const extendedOptions = extendMailType(options);
  extendedOptions.from = process.env.NODEMAILER_USERNAME;
  extendedOptions.subject = subject;

  try {
    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log('Server is ready to take our messages');
          resolve(success);
        }
      });
    });
  } catch (error) {
    console.error(error);
    return;
  }

  await new Promise((resolve, reject) => {
    transporter.sendMail(extendedOptions, async (error, info) => {
      if (error) {
        console.error('Mailer ERROR', error);
        reject(error);
      }
      console.log(info);
      resolve(true);
    });
  });

  return 'executed';
};
