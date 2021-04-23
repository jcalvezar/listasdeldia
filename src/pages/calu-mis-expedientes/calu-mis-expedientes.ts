import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { JcaserviceProvider } from '../../providers/jcaservice/jcaservice';
import { AgregarexpedientePage } from '../agregarexpediente/agregarexpediente';

/**
 * Generated class for the CaluMisExpedientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-calu-mis-expedientes',
  templateUrl: 'calu-mis-expedientes.html',
})
export class CaluMisExpedientesPage {

tipo: string = 'chaco';
    
  constructor(public jcaService: JcaserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisnotificacionesPage');
	
	  //this.jcaService.leerExpedientes();
  };



    agregarExpediente() {
      console.log("expte nuevo");

      this.navCtrl.push(AgregarexpedientePage);
    }
}
