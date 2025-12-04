import * as crypto from "crypto"; // Pastikan path logger sesuai dengan struktur proyek Anda
import { decompressFromEncodedURIComponent } from "lz-string";

// Mendeklarasikan tipe untuk response yang akan dikembalikan
type DecryptedResponse = Record<string, any>;

const decryptBpjsResponse = (
  encryptedData: string,
  cons_id: string,
  secret_key: string,
  timestamp: string
): DecryptedResponse => {
  try {
    if (encryptedData.trim() === "") {
      throw new Error("⚠️ Response BPJS kosong atau tidak terformat base64");
    }

    // console.log("Encrypted Data:", encryptedData, cons_id, secret_key);

    console.log("Timestamp:", timestamp);

    // Membuat key dengan SHA-256 hash dari kons_id, secret_key, dan timestamp
    const key = crypto
      .createHash("sha256")
      .update(cons_id + secret_key + timestamp)
      .digest();
    const iv = key.slice(0, 16); // Mengambil 16 byte pertama untuk IV

    // console.log("Decryption Key:", key.toString("hex"));
    // Dekripsi data menggunakan AES-256-CBC
    const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);

    // console.log("decipher:", decipher);

    const decrypted = decipher.update(Buffer.from(encryptedData, "base64"));

    console.log("Decrypted Buffer:", decrypted);

    const concated = Buffer.concat([decrypted, decipher.final()]);

    // decrypted = Buffer.concat([decrypted, decipher.final()]);

    console.log("Final Decrypted Buffer:", concated);

    const decryptedText = concated.toString();
    // console.log("Decrypted Text:", decryptedText);

    // Coba dekompresi jika memungkinkan
    const decompressedText = decompressFromEncodedURIComponent(decryptedText);

    console.log("Decompressed Text:", decompressedText);

    const finalText = decompressedText || decryptedText;

    // Parsing hasil dekompresi menjadi objek JSON
    return JSON.parse(finalText);
  } catch (error: any) {
    console.error("Error during decryption:", error);
    throw new Error(`[DECRYPT ERROR] ${error.message}`);
  }
};

export { decryptBpjsResponse };
