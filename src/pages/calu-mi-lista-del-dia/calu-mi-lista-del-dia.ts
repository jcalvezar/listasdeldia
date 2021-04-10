import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { JcaserviceProvider } from '../../providers/jcaservice/jcaservice';
import { ExpedientePage } from '../expediente/expediente';
import { AgregarexpedientePage } from '../agregarexpediente/agregarexpediente';

/**
 * Generated class for the CaluMiListaDelDiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-calu-mi-lista-del-dia',
  templateUrl: 'calu-mi-lista-del-dia.html',
})
export class CaluMiListaDelDiaPage {

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
