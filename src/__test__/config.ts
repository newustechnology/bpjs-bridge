import { configType } from "../core/configHelper";
import "dotenv/config";

export const PcareConfig: configType = {
  mode: (process.env.MODE ?? "dev") as any,
  consId: process.env.CONST_ID ?? "",
  secretKey: process.env.SECRET_KEY ?? "",
  userKey: process.env.USER_KEY ?? "",
  username: process.env.USERNAME ?? "",
  password: process.env.PASSWORD ?? "",
};
