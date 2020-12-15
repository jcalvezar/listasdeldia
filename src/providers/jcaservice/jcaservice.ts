import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { So_usuario } from '../../models/modelos';

/*
  Generated class for the JcaserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JcaserviceProvider {

	usuario: So_usuario;
	
  constructor(public http: HttpClient) {
    console.log('Hello JcaserviceProvider Provider');
		
		this.usuario = {
			telefono: '',
			nombre: '',
			ciudad: 0,
			direccion: '',
			id: '',
			codigo: '',
			token: ''
		};
  }

}
