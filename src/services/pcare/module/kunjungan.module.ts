import { DataArray, DataObject, DataPaginate } from "../../../types/global";
import {
  KunjunganPayload,
  KunjunganRujukanType,
  KunjunganType,
  RiwayatKunjunganType,
} from "../../../types/kunjungan";

import { PcareService } from "../pcare.service";

export class KunjunganModule {
  constructor(private parent: PcareService) {}

  /**
   *
   * @param nomorKunjungan
   * @returns
   */
  async getRujukan(
    nomorKunjungan: string
  ): Promise<DataArray<KunjunganRujukanType>> {
    const response = await this.parent.callEndpoint<DataArray<any>>(
      "rujukan_kunjungan",
      {
        nomorKunjungan,
      }
    );
    return response.data;
  }

  /**
   *
   * @param nomorKartu
   * @returns
   * @description
   * Get Data Riwayat Kunjungan berdasarkan Nomor Kartu Peserta
   */
  async getRiwayat(nomorKartu: string) {
    const response = await this.parent.callEndpoint<
      DataPaginate<RiwayatKunjunganType>
    >("riwayat_kunjungan", {
      nomorKartu,
    });
    return response.data;
  }

  /**
   *
   * @param body
   * @returns
   * @description
   * Add Data Kunjungan ke BPJS PCare V1
   */
  async add(body: KunjunganPayload) {
    const response = await this.parent.callEndpoint<DataObject<KunjunganType>>(
      "tambah_kunjungan",
      undefined,
      body
    );
    return response.data;
  }

  /**
   *
   * @param props
   * kirim kode diagnosa dengan string array
   * @returns
   * @description
   * untuk mendapatkan referensi tacc
   */
  async ref_tacc(kodediags?: string[]) {
    let options: string[] = [];
    if (kodediags) {
      options = await Promise.all(
        kodediags.map(async (kodediag) => {
          const diag = await this.parent.diagnosa.get(kodediag, 0, 1);
          return `${diag.list[0].kdDiag}-${diag.list[0].nmDiag}`;
        })
      );
    }
    return [
      { kdTacc: "-1", nmTacc: "Tanpa TACC", alasanTacc: [] },
      {
        kdTacc: "1",
        nmTacc: "Time",
        alasanTacc: ["< 3 Hari", ">= 3 - 7 Hari", ">= 7 Hari"],
      },
      {
        kdTacc: "2",
        nmTacc: "Age",
        alasanTacc: [
          "< 1 Bulan",
          ">= 1 Bulan s/d < 12 Bulan",
          ">= 1 Tahun s/d < 5 Tahun",
          ">= 5 Tahun s/d < 12 Tahun",
          ">= 12 Tahun s/d < 55 Tahun",
          ">= 55 Tahun",
        ],
      },
      {
        kdTacc: "3",
        nmTacc: "Complication",
        alasanTacc: options ?? [],
      },
      {
        kdTacc: "4",
        nmTacc: "Comorbidity",
        alasanTacc: ["< 3 Hari", ">= 3 - 7 Hari", ">= 7 Hari"],
      },
    ];
  }

  /**
   *
   * @param body
   * @returns
   * @description
   * Edit Data Kunjungan ke BPJS PCare V1
   */
  async edit(body: KunjunganPayload) {
    const response = await this.parent.callEndpoint<DataObject<KunjunganType>>(
      "edit_kunjungan",
      undefined,
      body
    );
    return response.data;
  }

  /**
   *
   * @param nomorKunjungan
   * @returns
   * @description
   * Delete Data Kunjungan berdasarkan Nomor Kunjungan
   */
  async delete(nomorKunjungan: string) {
    const response = await this.parent.callEndpoint<null>("hapus_kunjungan", {
      nomorKunjungan,
    });
    return response.data;
  }
}
