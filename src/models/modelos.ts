
export interface So_usuario {
	nombre: string,
	apellido: string,
	email: string,
	password: string,
	ciudad: number,
	direccion: string,
	id: string,
	codigo: string,
	token: string
};

export interface So_expediente {
	id: string,
	nro: string,
	caratula: string,
	juzgado: string
};

export interface So_expedientes {
	[index: string]: So_expediente[];
};

export interface So_notificacion {
	id: string,
	nro: string,
	caratula: string,
	proveido: string,
	juzgado: string,
	provincia: string
};

export interface So_notificaciones {
	[index: string]: So_notificacion[];
};

export interface So_proveido {
	fecha: string,
	titulo: string,
	texto: string,
};

export interface So_proveidos {
	[index: string]: So_proveido[];
};