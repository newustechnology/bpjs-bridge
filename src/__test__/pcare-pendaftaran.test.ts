import { redis } from "../lib/redis";
import { PcareService } from "../services/pcare/pcare.service";
import { PcareConfig } from "./config";

// Setup PcareService
const pcareService = new PcareService(PcareConfig, redis);

describe("PcareService", () => {
  afterAll(() => {
    redis.disconnect();
  });

  it("should load environment variables", () => {
    console.log(PcareConfig);
    expect(PcareConfig).toBeDefined();
  });

  it("peserta get", async () => {
    await pcareService.flushAll();
    const response = await pcareService.pendaftaran.getByProvider(
      "09-01-2026",
      "0",
      "10"
    );
    console.log(response);
  });

  //   it("pendaftaran test", async () => {
  //     const response = await pcareService.pendaftaran.add({
  //       kdProviderPeserta: "0138U013",
  //       tglDaftar: "09-01-2026",
  //       noKartu: "0002081643219",
  //       kdPoli: "001",
  //       keluhan: "sakit kepalak",
  //       kunjSakit: true,
  //       sistole: 0,
  //       diastole: 0,
  //       beratBadan: 0,
  //       tinggiBadan: 0,
  //       respRate: 0,
  //       lingkarPerut: 0,
  //       heartRate: 0,
  //       rujukBalik: 0,
  //       kdTkp: "10",
  //     });
  //     console.log(response);
  //   });
});
