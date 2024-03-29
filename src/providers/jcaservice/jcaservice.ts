import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { So_usuario, So_expedientes, So_notificaciones, So_proveidos } from '../../models/modelos';

/*
  Generated class for the JcaserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JcaserviceProvider {

	//apiUrl = 'https://www.jcalvez.info/apps/listasdeldia/v001';
	almacen: string = 'ListasDelDia';
	apiUrl = 'http://192.168.29.128/~listas/jcapi/v001';
  public loginState:boolean = false;
	
	usuario: So_usuario;
	expedientes: So_expedientes;
	notificaciones: So_notificaciones;
	proveidos: So_proveidos;
	diaActual= '2021-04-23';
	
  constructor(private storage: Storage, public loadingCtrl: LoadingController, public http: HttpClient) {
    console.log('Hello JcaserviceProvider Provider');
		
		this.usuario = {
			nombre: '',
			apellido: '',
			email: '',
			password: '',
			ciudad: 0,
			direccion: '',
			id: '',
			codigo: '',
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
				 
				 this.storage.set(this.almacen, result['user']);
				 
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
	leerNotificaciones(dia: string) {
		console.log('leyendo notificaciones del dia:', dia);
		
		let postData = new FormData();
		postData.append('dia', dia);

		this.enviarPost('/notificaciones/', postData).then(data => {
			console.log('Lei notifis...');
			this.notificaciones = data['notificaciones'];
		}, (err) => {
			console.log(err);
		});
	}
	
	// -------------------------------------------------------
	// Leer Proveidos
	// -------------------------------------------------------
	leerProveidos(notificacion) {
		console.log('Leyendo Proveidos');
		
		let postData = new FormData();
		postData.append('expediente' , notificacion.nro);
		postData.append('juzgado' , notificacion.juzgado);
		postData.append('provincia' , notificacion.provincia);
		
		this.enviarPost('/proveidos/',postData).then((result) => {
			 console.log('JCA: ' + JSON.stringify(result));
			 
			 this.proveidos = result['proveidos'];
		}, (err) => {
			
			 console.log(err);
		});
	}
	
	// -------------------------------------------------------
	// Lee un JSON de una URL via GET
	// -------------------------------------------------------
	enviarGet(servicio) {
	  return new Promise( (resolve, reject) => {
			
			let loader = this.loadingCtrl.create({
				content: "Espere..."
			});
			
			loader.present().then(() => {
				// Preparo HEADERS
				let jheaders = new HttpHeaders();
			
				if (this.loginState) {
					jheaders = jheaders.set('Authentication', this.usuario.token);
					console.log('Agregué TOKEN al HEADER HTTP');
				}
			
				this.http.get(this.apiUrl+servicio, {headers: jheaders}).subscribe(data => {
					
					loader.dismiss().then(() => {
						resolve(data);
					});
					
				}, err => {
					console.log(err);
					
					loader.dismiss().then(() => {
						reject(err);
					});
					
				});
			});
	  });
	}
		
	// -------------------------------------------------------
	// Lee un JSON de una URL via POST enviando DATA
	// -------------------------------------------------------
	enviarPost(servicio,data) {
	  return new Promise( (resolve, reject) => {
		  
			let loader = this.loadingCtrl.create({
				content: "Espere..."
			});
			
			loader.present().then(() => {
				// Preparo HEADERS
				let jheaders = new HttpHeaders();
				
				if (this.loginState) {
					jheaders = jheaders.set('Authentication', this.usuario.token);
					console.log('Agregué TOKEN al HEADER HTTP');
				}
				
				// ENVIO EL POST
				this.http.post(this.apiUrl+servicio, data, {headers: jheaders})
					.subscribe(res => {
						
						loader.dismiss().then(() => {
							resolve(res);
						});
					
					}, (err) => {
						loader.dismiss().then(() => {
							reject(err);
						});
					});

			});
		});
	}

}
