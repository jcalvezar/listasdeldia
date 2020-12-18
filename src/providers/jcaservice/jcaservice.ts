import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { So_usuario, So_expedientes, So_notificaciones } from '../../models/modelos';

/*
  Generated class for the JcaserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JcaserviceProvider {

	apiUrl = 'https://www.calu.com/api001';
  public loginState:boolean = false;
	
	usuario: So_usuario;
	expedientes: So_expedientes;
	notificaciones: So_notificaciones;
	
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
		
		this.expedientes = {
			chaco: [
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
			}],
			formosa: [
			{
				id: '4',
				nro: '1/19',
				caratula: 'El Estado contra Gildo'
			},
			{
				id: '5',
				nro: '11/19',
				caratula: 'El Estado contra Insfran'
			},
			{
				id: '6',
				nro: '111/19',
				caratula: 'El Estado contra Insfran Xion'
			}]
		};
		
		this.notificaciones = {
			chaco: [
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
			}],
			formosa: [
			{
				id: '4',
				nro: '1/19',
				caratula: 'El Estado contra Formoguayo',
				proveido: 'Fallo c/Sentencia: Prision Perpetua'
			},
			{
				id: '5',
				nro: '11/19',
				caratula: 'El Estado contra Paraguayo',
				proveido: 'Fallo c/Sentencia: Prision Perpetua'
			},
			{
				id: '6',
				nro: '111/19',
				caratula: 'El Estado contra Clorindo',
				proveido: 'Fallo c/Sentencia: Prision Perpetua'
			}]
		};
		
		// this.leerExpedientes();
		// this.leerNotificaciones();
  }
	
	// -------------------------------------------------------
	// Leer Expedientes
	// -------------------------------------------------------
	leerExpedientes() {
		console.log('leyendo expedientes');
		
		this.enviarGet('/expedientes/').then(data => {
			this.expedientes = data['expedientes'];
		}, (err) => {
			console.log(err);
		});
	}
	
	// -------------------------------------------------------
	// Leer Notificaciones
	// -------------------------------------------------------
	leerNotificaciones() {
		console.log('leyendo notificaciones');
		
		this.enviarGet('/notificaciones/').then(data => {
			this.notificaciones = data['notificaciones'];
		}, (err) => {
			console.log(err);
		});
	}
	
	// -------------------------------------------------------
	// Lee un JSON de una URL via GET
	// -------------------------------------------------------
	enviarGet(servicio) {
	  return new Promise(resolve => {
			
			// Preparo HEADERS
			let jheaders = new HttpHeaders();
		
			if (this.loginState) {
				jheaders = jheaders.set('Authentication', this.usuario.token);
				console.log('Agregué TOKEN al HEADER HTTP');
			}
		
			this.http.get(this.apiUrl+servicio, {headers: jheaders}).subscribe(data => {
				resolve(data);
			}, err => {
				console.log(err);
			});
	  });
	}
		
	// -------------------------------------------------------
	// Lee un JSON de una URL via POST enviando DATA
	// -------------------------------------------------------
	enviarPost(servicio,data) {
	  return new Promise((resolve, reject) => {
		  
		// Preparo HEADERS
    let jheaders = new HttpHeaders();
		
		if (this.loginState) {
			jheaders = jheaders.set('Authentication', this.usuario.token);
			console.log('Agregué TOKEN al HEADER HTTP');
		}
		
		// ENVIO EL POST
		this.http.post(this.apiUrl+servicio, data, {headers: jheaders})
		  .subscribe(res => {
			resolve(res);
		  }, (err) => {
			reject(err);
		  });
	  });
	}

}
