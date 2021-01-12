import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
import dotenv from 'dotenv';
import randomInt from './randomInt';
dotenv.config();

const privateKey = process.env.PRIVATE_KEY;

const encryptPassword = (message: string): string => {
  const hashDigest = sha256(randomInt(9999) + message);
  const hmacDigest = Base64.stringify(hmacSHA512(hashDigest, privateKey));
  return hmacDigest;
};

const createCode = (email: string): string => {
  const hashedMail = encryptPassword(email);
  return Array.from(
    { length: 5 },
    () => hashedMail[Math.floor(Math.random() * hashedMail.length)]
  ).join('');
};

export { encryptPassword, createCode };
