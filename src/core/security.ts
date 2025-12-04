import crypto from "crypto";
import { configType } from "./configHelper";

const generateSignature = (consId: string, secretKey: string) => {
  const timestamp = Math.floor(Date.now() / 1000);
  const data = `${consId}&${timestamp}`;

  const signature = crypto
    .createHmac("sha256", secretKey)
    .update(data)
    .digest("base64");

  return { timestamp, signature };
};

const generateAuthorization = (username: string, password: string) => {
  const authString = `${username}:${password}:095`;
  const base64Auth = Buffer.from(authString).toString("base64");

  return `Basic ${base64Auth}`;
};

export const generateHeader = ({
  consId,
  password,
  secretKey,
  userKey,
  username,
}: configType) => {
  const { signature, timestamp } = generateSignature(consId, secretKey);
  const authorization = generateAuthorization(username, password);

  return {
    "X-cons-id": consId,
    "X-timestamp": timestamp,
    "X-signature": signature,
    "X-Authorization": authorization,
    userKey,
    Accept: "application/json",
  };
};
