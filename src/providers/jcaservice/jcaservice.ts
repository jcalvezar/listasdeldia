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

	apiUrl = 'https://www.jcalvez.info/apps/listasdeldia/v001';
  public loginState:boolean = false;
	
	usuario: So_usuario;
	expedientes: So_expedientes;
	notificaciones: So_notificaciones;
	
  constructor(public http: HttpClient) {
    console.log('Hello JcaserviceProvider Provider');
		
		this.usuario = {
			nombre: '',
			apellido: '',
			email: '',
			id: '',
			token: ''
		};
		

		this.expedientes = {
			chaco: [],
			formosa: []
		};
		
		this.notificaciones = {
			chaco: [],
			formosa: []
		};
		
		/*
		this.leerExpedientes();
		this.leerNotificaciones();
		*/
  }
	
	// -------------------------------------------------------
	// Login
	// -------------------------------------------------------
	login(email, password) {
	  return new Promise(resolve => {
			
			console.log('LOGIN');
			
			let postData = new FormData();
			postData.append('email' , email);
			postData.append('password' , password);
			
			this.enviarPost('/User/login/',postData).then((result) => {
				 console.log('JCA: ' + JSON.stringify(result));
				 this.usuario = result['user'];
				 this.loginState = true;
				 
				 this.leerExpedientes();
				 this.leerNotificaciones();
				 
				 resolve(true);
			}, (err) => {
				
				 console.log(err);
			});
	  });
	}
	
	// -------------------------------------------------------
	// Leer Expedientes
	// -------------------------------------------------------
	leerExpedientes() {
		console.log('leyendo expedientes');
		
		this.enviarGet('/expedientes/').then(data => {
			console.log('Lei expedientes...');
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
			console.log('Lei notifis...');
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
