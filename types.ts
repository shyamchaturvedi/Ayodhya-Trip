export enum ZoneType {
  RAM_MANDIR = 'Ram Mandir Zone',
  HANUMAN_GARHI = 'Hanuman Garhi Zone',
  SARYU_GHAT = 'Saryu Ghat Zone'
}

export interface Place {
  id: string;
  name: string;
  distance: string;
  mapLink: string;
  description: string;
  zone: ZoneType;
}

export const ZONES = [
  ZoneType.RAM_MANDIR,
  ZoneType.HANUMAN_GARHI,
  ZoneType.SARYU_GHAT
];