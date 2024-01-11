export interface Sectores {
  _id: string;
  SectorNombre: string;
}

export interface Subsectores {
  _id: string;
  SubSectorNombre: string;
  Tipo: string;
}

export interface Actividades {
  _id: string;
  SectorId: string;
  SubSectorId: string;
  Actividad: string;
  Descripcion: string;
  CIIU_4: string;
  Codigo: string;
  Unidad: string;
  Categoria: number;
}

export interface Activid {
  Actividad: string;
  CIIU_4: string;
  Categoria: number;
  Codigo: string;
  Descripcion: string;
  SectorId: string;
  SubSectorId: string;
  Unidad: string;
  _id: string;
}

export interface Datos {
  apoderado: string,
  dni: string,
  solicitante: string,
  proyecto: string,
  correo: string,
  telefono: string,
  direccion: string,
  sector: string,
  subsector: string,
  actividad: string,
  unidad: string,
  categoria: string,
  descripcion: string,
  unidades: string,
  observacion: string
}


