export interface Diagnose {
  kdDiag: string;
  nmDiag: string;
  nonSpesialis: boolean;
}

export interface GetDPHOType {
  kdObat: string;
  nmObat: string;
  sedia: number;
}

export interface PoliFKTPType {
  kdPoli: string;
  nmPoli: string;
  poliSakit: boolean;
}

export interface ProviderRayonisasiType {
  kdProvider: string;
  nmProvider: string;
}

export interface StatusPulangType {
  kdStatusPulang: string;
  nmStatusPulang: string;
}

export interface ReferensiTindakanType {
  kdTindakan: string;
  nmTindakan: string;
  maxTarif: number;
  withValue: boolean;
}

export interface AlergiJenisType {
  kdAlergi: string;
  nmAlergi: string;
}

export interface PrognosaType {
  kdPrognosa: string;
  nmPrognosa: string;
}
