// src/config/BPJSConfig.ts
export type BPJSBridgeConfig = {
  mode: "dev" | "prod"; // mode
  global?: {
    username: string;
    password: string;
    consId: string;
    secretKey: string;
  };
  pcare?: {
    consId?: string;
    secretKey?: string;
    userKey?: string;
  };
  vclaim?: {
    consId?: string;
    secretKey?: string;
    userKey?: string;
  };
  antrol?: {
    consId?: string;
    secretKey?: string;
    userKey?: string;
  };
  icare?: {
    consId?: string;
    secretKey?: string;
    username?: string;
    password?: string;
  };
};
