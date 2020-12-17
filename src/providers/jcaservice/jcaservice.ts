import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { So_usuario, So_expediente, So_notificacion } from '../../models/modelos';

/*
  Generated class for the JcaserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JcaserviceProvider {

	usuario: So_usuario;
	expedientes: So_expediente[];
	notificaciones: So_notificacion[];
	
  constructor(public http: HttpClient) {
    console.log('Hello JcaserviceProvider Provider');
		
		this.usuario = {
			nombre: '',
			email: '',
			ciudad: 0,
			direccion: '',
			id: '',
			codigo: '',
			token: ''
		};
		
		this.expedientes = [
			{
				id: '1',
				nro: '1/19',
				caratula: 'El Estado contra Kristina Manson'
			},
			{
				id: '2',
				nro: '11/19',
				caratula: 'El Estado contra Maximo Manson'
			},
			{
				id: '3',
				nro: '111/19',
				caratula: 'El Estado contra Loro Manson'
			}
		];
		
		this.notificaciones = [
			{
				id: '1',
				nro: '1/19',
				caratula: 'El Estado contra Kristina Manson',
				proveido: 'Fallo c/Sentencia: Prision Perpetua'
			},
			{
				id: '2',
				nro: '11/19',
				caratula: 'El Estado contra Maximo Manson',
				proveido: 'Fallo c/Sentencia: Prision Perpetua'
			},
			{
				id: '3',
				nro: '111/19',
				caratula: 'El Estado contra Loro Manson',
				proveido: 'Fallo c/Sentencia: Prision Perpetua'
			}
		];
		
  }

}
