import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { JcaserviceProvider } from '../../providers/jcaservice/jcaservice';
import { ExpedientePage } from '../expediente/expediente';
import { AgregarexpedientePage } from '../agregarexpediente/agregarexpediente';

/**
 * Generated class for the MisexpedientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-misexpedientes',
  templateUrl: 'misexpedientes.html',
})
export class MisexpedientesPage {

	tipo: string = 'chaco';
	
  constructor(public jcaService: JcaserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisexpedientesPage');
		
		this.jcaService.leerExpedientes();
  }
	
	mostrarExpediente(expediente) {
	  console.log("expte "+expediente.nro);

	  this.navCtrl.push(ExpedientePage, {
        expte: expediente
      });
	}
	
	agregarExpediente() {
	  console.log("expte nuevo");

	  this.navCtrl.push(AgregarexpedientePage);
	}

	eliminarExpediente(expediente) {
		console.log("Eliminando...");
	}
}
