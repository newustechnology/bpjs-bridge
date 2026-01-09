type endpointType = {
  name: string;
  endpoint: string;
  method: string;
  description: string;
  cacheDuration?: number;
};

export const enpoints: endpointType[] = [
  {
    name: "diagnosa",
    endpoint: "diagnosa/{kodediag}/{start}/{limit}",
    method: "GET",
    description: "Get Data Diagnosa dari BPJS PCare",
    cacheDuration: 60,
  },
  {
    name: "alergi_jenis",
    endpoint: "alergi/jenis/{jenisAlergi}",
    method: "GET",
    description: "Get Data Alergi berdasarkan jenis",
    cacheDuration: 60,
  },
  {
    name: "dokter",
    endpoint: "dokter/{start}/{limit}",
    method: "GET",
    description: "Get Data Dokter dari BPJS PCare",
    cacheDuration: 3600,
  },
  {
    name: "kesadaran",
    endpoint: "kesadaran",
    method: "GET",
    description: "Get Data Kesadaran dari BPJS PCare",
    cacheDuration: 3600,
  },
  {
    name: "rujukan_kunjungan",
    endpoint: "kunjungan/rujukan/{nomorKunjungan}",
    method: "GET",
    description: "Get Data Rujukan berdasarkan Nomor Kunjungan",
    cacheDuration: 60,
  },
  {
    name: "riwayat_kunjungan",
    endpoint: "kunjungan/peserta/{nomorKartu}",
    method: "GET",
    description: "Get Data Riwayat Kunjungan berdasarkan Nomor Kartu Peserta",
    cacheDuration: 60,
  },
  {
    name: "tambah_kunjungan",
    endpoint: "kunjungan/v1",
    method: "POST",
    description: "Add Data Kunjungan ke BPJS PCare",
  },
  {
    name: "edit_kunjungan",
    endpoint: "kunjungan/v1",
    method: "PUT",
    description: "Edit Data Kunjungan di BPJS PCare",
  },
  {
    name: "hapus_kunjungan",
    endpoint: "kunjungan/{nomorKunjungan}",
    method: "DELETE",
    description: "Delete Data Kunjungan berdasarkan Nomor Kunjungan",
  },
  {
    name: "dpho",
    endpoint: "obat/dpho/{kodeNamaDPHO}/{start}/{limit}",
    method: "GET",
    description: "Get Data DPHO dari BPJS PCare berdasarkan kode atau nama",
    cacheDuration: 3600,
  },
  {
    name: "obat_kunjungan",
    endpoint: "obat/kunjungan/{nomorKunjungan}",
    method: "GET",
    description: "Get Data Obat berdasarkan Nomor Kunjungan",
    cacheDuration: 60,
  },
  {
    name: "tambah_obat",
    endpoint: "obat/kunjungan",
    method: "POST",
    description: "Add Data Obat ke BPJS PCare",
  },
  {
    name: "hapus_obat",
    endpoint: "obat/{kdObatSK}/kunjungan/{nomorKunjungan}",
    method: "DELETE",
    description: "Delete Data Obat berdasarkan kdObatSK dan Nomor Kunjungan",
  },
  {
    name: "provider_rayonisasi",
    endpoint: "provider/{start}/{limit}",
    method: "GET",
    description: "Get Data Provider Rayonisasi dari BPJS PCare",
    cacheDuration: 3600,
  },
  {
    name: "icare_validate",
    endpoint: "api/pcare/validate",
    method: "POST",
    description: "API Data Riwayat Pelayanan iCare",
  },
  {
    name: "icare_rs_validate",
    endpoint: "api/rs/validate",
    method: "POST",
    description: "API Data Riwayat Pelayanan iCare RS",
  },
  {
    name: "pendaftaran_by_noUrut",
    endpoint: "pendaftaran/noUrut/{noUrut}/tglDaftar/{tglDaftar}",
    method: "GET",
    description:
      "Get Data Pendaftaran berdasarkan Nomor Urut dan Tanggal Daftar",
    cacheDuration: 60,
  },
  {
    name: "pendaftaran_provider",
    endpoint: "pendaftaran/tglDaftar/{tglDaftar}/{start}/{limit}",
    method: "GET",
    description: "Get Data Pendaftaran berdasarkan tanggal, start, dan limit",
    cacheDuration: 60,
  },
  {
    name: "tambah_pendaftaran",
    endpoint: "pendaftaran",
    method: "POST",
    description: "Add Data Pendaftaran Baru",
  },
  {
    name: "hapus_pendaftaran",
    endpoint:
      "pendaftaran/peserta/{noKartu}/tglDaftar/{tglDaftar}/noUrut/{noUrut}/kdPoli/{kdPoli}",
    method: "DELETE",
    description:
      "Delete Data Pendaftaran berdasarkan Nomor Kartu, Tanggal, Urutan, dan Kode Poli",
  },
  {
    name: "peserta_noka",
    endpoint: "peserta/{noKartu}",
    method: "GET",
    description: "Get Data Peserta berdasarkan Nomor Kartu Peserta",
    cacheDuration: 3600,
  },
  {
    name: "peserta_nik_noka",
    endpoint: "peserta/{jenisKartu}/{noIdentitas}",
    method: "GET",
    description:
      "Get Data Peserta berdasarkan Jenis Kartu (NIK/NOKA) dan Nomor Identitas",
    cacheDuration: 3600,
  },
  {
    name: "poli_fktp",
    endpoint: "poli/fktp/{start}/{limit}",
    method: "GET",
    description: "Get Data Poli FKTP dari BPJS PCare",
    cacheDuration: 3600,
  },
  {
    name: "prognosa",
    endpoint: "prognosa",
    method: "GET",
    description: "Get Data Prognosa dari BPJS PCare",
    cacheDuration: 3600,
  },
  {
    name: "status_pulang",
    endpoint: "statuspulang/rawatInap/{rawatInap}",
    method: "GET",
    description: "Get Status Pulang berdasarkan Rawat Inap (true/false)",
    cacheDuration: 3600,
  },
  {
    name: "tindakan_kunjungan",
    endpoint: "tindakan/kunjungan/{nomorKunjungan}",
    method: "GET",
    description: "Get Data Tindakan berdasarkan Nomor Kunjungan",
    cacheDuration: 60,
  },
  {
    name: "referensi_tindakan",
    endpoint: "tindakan/kdTkp/{kdTkp}/{start}/{limit}",
    method: "GET",
    description: "Get Data Referensi Tindakan berdasarkan kdTkp",
    cacheDuration: 3600,
  },
  {
    name: "tambah_tindakan",
    endpoint: "tindakan",
    method: "POST",
    description: "Add Data Tindakan",
  },
  {
    name: "edit_tindakan",
    endpoint: "tindakan",
    method: "PUT",
    description: "Edit Data Tindakan",
  },
  {
    name: "hapus_tindakan",
    endpoint: "tindakan/{kdTindakanSK}/kunjungan/{nomorKunjungan}",
    method: "DELETE",
    description:
      "Delete Data Tindakan berdasarkan kdTindakanSK dan Nomor Kunjungan",
  },
  {
    name: "referensi_spesialis",
    endpoint: "spesialis",
    method: "GET",
    description: "Get Data Referensi Spesialis",
    cacheDuration: 3600,
  },
  {
    name: "referensi_subspesialis",
    endpoint: "spesialis/{kdSpesialis}/subspesialis",
    method: "GET",
    description: "Get Data Referensi Sub Spesialis berdasarkan Kode Spesialis",
    cacheDuration: 3600,
  },
  {
    name: "referensi_sarana",
    endpoint: "spesialis/sarana",
    method: "GET",
    description: "Get Data Referensi Sarana",
    cacheDuration: 3600,
  },
  {
    name: "referensi_khusus",
    endpoint: "spesialis/khusus",
    method: "GET",
    description: "Get Data Referensi Khusus",
    cacheDuration: 3600,
  },
  {
    name: "rujuk_subspesialis",
    endpoint:
      "spesialis/rujuk/subspesialis/{kdSubSpesialis}/sarana/{kdSarana}/tglEstRujuk/{tglEstRujuk}",
    method: "GET",
    description: "Get Data Faskes Rujukan Sub Spesialis",
    cacheDuration: 3600,
  },
  {
    name: "rujuk_khusus",
    endpoint:
      "spesialis/rujuk/khusus/{kdKhusus}/noKartu/{noKartu}/tglEstRujuk/{tglEstRujuk}",
    method: "GET",
    description: "Get Data Faskes Rujukan Khusus",
    cacheDuration: 3600,
  },
  {
    name: "rujuk_khusus_subspesialis",
    endpoint:
      "spesialis/rujuk/khusus/{kdKhusus}/subspesialis/{kdSubSpesialis}/noKartu/{noKartu}/tglEstRujuk/{tglEstRujuk}",
    method: "GET",
    description: "Get Data Faskes Rujukan Khusus untuk THALASEMIA dan HEMOFILI",
    cacheDuration: 3600,
  },
  {
    name: "mcu_kunjungan",
    endpoint: "MCU/kunjungan/{nomorKunjungan}",
    method: "GET",
    description: "Get Data MCU berdasarkan Nomor Kunjungan",
    cacheDuration: 60,
  },
  {
    name: "tambah_mcu",
    endpoint: "MCU",
    method: "POST",
    description: "Add Data MCU ke BPJS PCare",
  },
  {
    name: "edit_mcu",
    endpoint: "MCU",
    method: "PUT",
    description: "Edit Data MCU di BPJS PCare",
  },
  {
    name: "hapus_mcu",
    endpoint: "MCU/{kdMCU}/kunjungan/{nomorKunjungan}",
    method: "DELETE",
    description: "Delete Data MCU berdasarkan kdMCU dan Nomor Kunjungan",
  },
  {
    name: "get_club_prolanis",
    endpoint: "kelompok/club/{kodeJenisKelompok}",
    method: "GET",
    description:
      "Get Data Club Prolanis berdasarkan Kode Jenis Kelompok (01: Diabetes Melitus, 02: Hipertensi)",
    cacheDuration: 3600,
  },
  {
    name: "get_kegiatan_kelompok",
    endpoint: "kelompok/kegiatan/{tanggal}",
    method: "GET",
    description:
      "Get Data Kegiatan Kelompok berdasarkan tanggal (format: dd-mm-yyyy)",
    cacheDuration: 60,
  },
  {
    name: "get_peserta_kegiatan_kelompok",
    endpoint: "kelompok/peserta/{eduId}",
    method: "GET",
    description: "Get Data Peserta Kegiatan Kelompok berdasarkan eduId",
    cacheDuration: 60,
  },
  {
    name: "add_kegiatan_kelompok",
    endpoint: "kelompok/kegiatan",
    method: "POST",
    description: "Add Data Kegiatan Kelompok",
  },
  {
    name: "add_peserta_kegiatan_kelompok",
    endpoint: "kelompok/peserta",
    method: "POST",
    description: "Add Data Peserta Kegiatan Kelompok",
  },
  {
    name: "delete_kegiatan_kelompok",
    endpoint: "kelompok/kegiatan/{eduId}",
    method: "DELETE",
    description: "Delete Data Kegiatan Kelompok berdasarkan eduId",
  },
  {
    name: "delete_peserta_kegiatan_kelompok",
    endpoint: "kelompok/peserta/{eduId}/{noKartu}",
    method: "DELETE",
    description:
      "Delete Data Peserta Kegiatan Kelompok berdasarkan eduId dan Nomor Kartu Peserta",
  },
  {
    name: "ref_poli_antrol",
    endpoint: "ref/poli/tanggal/{tanggal}",
    method: "GET",
    description: "Melihat referensi poli pada layanan antrean (WS Antrol)",
    cacheDuration: 60,
  },
  {
    name: "ref_dokter_antrol",
    endpoint: "ref/dokter/kodepoli/{kodepoli}/tanggal/{tanggal}",
    method: "GET",
    description:
      "Melihat daftar dokter berdasarkan poli dan tanggal (WS Antrol)",
    cacheDuration: 60,
  },
  {
    name: "tambah_antrean",
    endpoint: "antrean/add",
    method: "POST",
    description: "Menambah data antrean pasien (WS Antrol)",
  },
  {
    name: "update_status_antrean",
    endpoint: "antrean/panggil",
    method: "POST",
    description: "Update status antrean hadir/tidak hadir (WS Antrol)",
  },
  {
    name: "batal_antrean",
    endpoint: "antrean/batal",
    method: "POST",
    description: "Membatalkan antrean pasien (WS Antrol)",
  },
  {
    name: "scrinning_rekap",
    endpoint: "skrinning/rekap",
    method: "GET",
    description:
      "Mengambil data rekapitulasi hasil Skrining Riwayat Kesehatan per penyakit",
    cacheDuration: 60,
  },
  {
    name: "scrinning_peserta",
    endpoint: "/skrinning/peserta/{nomor_peserta}/{start}/{limit}",
    method: "GET",
    description:
      "Mengambil data rekapitulasi Skrining Riwayat Kesehatan per peserta",
    cacheDuration: 60,
  },
  {
    name: "scrinning_diabetes_mellitus",
    endpoint: "/skrinning/prolanis/dm/{nomor_peserta}/{start}/{limit}",
    method: "GET",
    description: "Mengambil data peserta prolanis DM sejak tahun 2017",
    cacheDuration: 60,
  },
  {
    name: "scrinning_hipertensi",
    endpoint: "skrinning/prolanis/ht/{nomor_peserta}/{start}/{limit}",
    method: "GET",
    description: "Mengambil data peserta prolanis HT sejak tahun 2017",
    cacheDuration: 60,
  },
] as const;

export const BaseUrl = {
  dev: {
    url_pcare: "https://apijkn-dev.bpjs-kesehatan.go.id/pcare-rest-dev",
    url_icare: "https://apijkn-dev.bpjs-kesehatan.go.id/ihs_dev",
    url_vclaim: "https://apijkn-dev.bpjs-kesehatan.go.id/vclaim-rest-dev",
    url_antrean_fktp: "https://apijkn-dev.bpjs-kesehatan.go.id/antreanfktp_dev",
  },
  prod: {
    url_icare: "https://apijkn.bpjs-kesehatan.go.id/ihs",
    url_pcare: "https://apijkn.bpjs-kesehatan.go.id/pcare-rest",
    url_vclaim: "https://apijkn.bpjs-kesehatan.go.id/vclaim-rest",
    url_antrean_fktp: "https://apijkn.bpjs-kesehatan.go.id/antreanfktp",
  },
};

export type EndpointName = (typeof enpoints)[number]["name"];
