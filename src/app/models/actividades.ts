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
  Apoderado: string,
  DNI: string,
  Solicitante: string,
  Proyecto: string,
  Correo: string,
  Telefono: string,
  Direccion: string,
  Sector: string,
  SubSector: string,
  Actividad: string,
  Unidad: string,
  Categoria: string,
  Descripcion: string,
  Unidades: string,
  Observacion: string
}


