import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { redisClient } from '../redis';
import { createCode } from './crypto';
dotenv.config();

const sendMail = async (email: string): Promise<void> => {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.naver.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const code = createCode(email);

  await redisClient.set(email, code, 'EX', 600); // set code to be expired after 10 minutes

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Utek 👻" <lcpnine@naver.com>', // sender address
    to: email, // list of receivers
    subject: 'Code for Sign Up', // Subject line
    html: `
    <div style="display: flex; flex-direction: column; width: 100%; height: 200px; justify-content: center; align-items: center;">
      <div style="display: flex; flex-direction: column; border: 3px solid #cb4154; width:600px; height: 200px; line-height: 30px; justify-content: center; align-items: center;">
        <div>Thanks for having interests on us. We are <b>'The Streamers'</b>!</div>
        <div>Please fill the blank on your sign up page with code below</div>
        <br/>
        <div style="display: flex; justify-content:center;">Code: &emsp; <b>${code}</b></div>
      </div>
    </div>
    `, // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

export default sendMail;
