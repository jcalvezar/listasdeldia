
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

export interface So_notificacion {
	id: string,
	nro: string,
	caratula: string,
	proveido: string
};