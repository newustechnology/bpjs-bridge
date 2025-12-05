// src/services/PcareService.ts
import Redis from "ioredis";
import { configType } from "../../core/configHelper";
import { FktpService } from "../fktp.service";
import { DataArray, DataPaginate } from "../../types/global";
import {
  AlergiJenisType,
  Diagnose,
  GetDPHOType,
  PoliFKTPType,
  PrognosaType,
  ProviderRayonisasiType,
  ReferensiTindakanType,
  StatusPulangType,
} from "../../types/pcare";
import { BaseUrl } from "../../config/enpoints";

/**
 * Service untuk mengakses endpoint PCare BPJS
 */
export class PcareService extends FktpService {
  /**
   * Constructor PcareService
   * @param config konfigurasi BPJS
   * @param redisClient instance Redis (opsional)
   * @param chachePrefix prefix untuk cache Redis (opsional)
   */
  constructor(config: configType, redisClient?: Redis, chachePrefix?: string) {
    const getBaseUrl = BaseUrl[config.mode].url_pcare;
    super(
      { ...config, baseUrl: getBaseUrl },
      redisClient,
      chachePrefix ?? "pcare"
    );
  }
  /**
   *
   * @param kodediag
   * @param start
   * @param limit
   * @returns
   */
  async getDiagnosa(
    kodediag: string,
    start: number,
    limit: number
  ): Promise<DataPaginate<Diagnose>> {
    const response = await this.callEndpoint<DataPaginate<Diagnose>>(
      "diagnosa",
      {
        kodediag,
        start,
        limit,
      }
    );
    return response.data;
  }

  /**
   *
   * @param start
   * @param limit
   * @returns
   */
  async getDokter(start: number, limit: number): Promise<any> {
    const response = await this.callEndpoint<DataArray<any>>("dokter", {
      start,
      limit,
    });
    return response.data;
  }

  /**
   *
   * @returns
   */
  async getKesadaran(): Promise<any> {
    const response = await this.callEndpoint<DataArray<any>>("kesadaran");
    return response.data;
  }

  //#OBAT

  /**
   *
   * @param kodeNamaDPHO Kode atau nama DPHO
   * @param start
   * @param limit
   * @returns
   */
  async getDPHO(
    kodeNamaDPHO: string,
    start: number,
    limit: number
  ): Promise<DataPaginate<GetDPHOType>> {
    const response = await this.callEndpoint<DataPaginate<GetDPHOType>>(
      "dpho",
      {
        kodeNamaDPHO,
        start,
        limit,
      }
    );
    return response.data;
  }

  //

  /**
   *
   * @param nomorKunjungan
   * @returns
   */
  async getRujukanKunjungan(nomorKunjungan: string): Promise<any> {
    const response = await this.callEndpoint<any>("rujukan_kunjungan", {
      nomorKunjungan,
    });
    return response.data;
  }

  // # POLI
  async getPiliFKTP(
    start: number,
    limit: number
  ): Promise<DataPaginate<PoliFKTPType>> {
    const response = await this.callEndpoint<DataPaginate<PoliFKTPType>>(
      "poli_fktp",
      {
        start,
        limit,
      }
    );
    return response.data;
  }

  // # Provider
  async getProviderRayonisasi(
    start: number,
    limit: number
  ): Promise<DataPaginate<ProviderRayonisasiType>> {
    const response = await this.callEndpoint<
      DataPaginate<ProviderRayonisasiType>
    >("provider_rayonisasi", {
      start,
      limit,
    });
    return response.data;
  }

  // # Status Pulang
  async getStatusPulang(
    rawatInap: boolean
  ): Promise<DataPaginate<StatusPulangType>> {
    const response = await this.callEndpoint<DataPaginate<StatusPulangType>>(
      "status_pulang",
      {
        rawatInap,
      }
    );
    return response.data;
  }

  // # Tindakan
  /**
   *
   * @param kdTkp 10 : RJTP, 20 : RITP, 50 : Promotif
   * @param start
   * @param limit
   * @returns
   */
  async getReferensiTindakan(
    kdTkp: "10" | "20" | "50",
    start: number,
    limit: number
  ): Promise<DataPaginate<ReferensiTindakanType>> {
    const response = await this.callEndpoint<
      DataPaginate<ReferensiTindakanType>
    >("referensi_tindakan", {
      kdTkp,
      start,
      limit,
    });
    return response.data;
  }

  // # Alergi
  /**
   *
   * @param jenisAlergi 01:Makanan, 02:Udara, 03:Obat
   * @returns
   */
  async getAlergiJenis(
    jenisAlergi: "01" | "02" | "03"
  ): Promise<DataArray<AlergiJenisType>> {
    const response = await this.callEndpoint<DataArray<AlergiJenisType>>(
      "alergi_jenis",
      { jenisAlergi }
    );
    return response.data;
  }

  // # Prognosa
  /**
   *
   * @returns
   */
  async getPrognosa(): Promise<DataArray<PrognosaType>> {
    const response = await this.callEndpoint<DataArray<PrognosaType>>(
      "prognosa"
    );
    return response.data;
  }
}
