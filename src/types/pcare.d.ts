export {};

declare global {
  interface Diagnose {
    kdDiag: string;
    nmDiag: string;
    nonSpesialis: boolean;
  }

  interface getDPHOType {
    kdObat: string;
    nmObat: string;
    sedia: number;
  }

  interface PoliFKTPType {
    kdPoli: string;
    nmPoli: string;
    poliSakit: boolean;
  }

  interface ProviderRayonisasiType {
    kdProvider: string;
    nmProvider: string;
  }

  interface StatusPulangType {
    kdStatusPulang: string;
    nmStatusPulang: string;
  }

  interface ReferensiTIndakanType {
    kdTindakan: string;
    nmTindakan: string;
    maxTarif: number;
    withValue: boolean;
  }
  interface AlergiJenisType {
    kdAlergi: string;
    nmAlergi: string;
  }
}
