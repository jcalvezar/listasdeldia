
export interface So_usuario {
	nombre: string,
	email: string,
	ciudad: number,
	direccion: string,
	id: string,
	codigo: string,
	token: string
};

export interface So_expediente {
	id: string,
	nro: string,
	caratula: string
};

export interface So_expedientes {
	[index: string]: So_expediente[];
};

export interface So_notificacion {
	id: string,
	nro: string,
	caratula: string,
	proveido: string
};

export interface So_notificaciones {
	[index: string]: So_notificacion[];
};