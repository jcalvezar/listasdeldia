import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { JcaserviceProvider } from '../../providers/jcaservice/jcaservice';
import { NotificacionPage } from '../notificacion/notificacion';

/**
 * Generated class for the MisnotificacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-misnotificaciones',
  templateUrl: 'misnotificaciones.html',
})
export class MisnotificacionesPage {

	tipo: string = 'chaco';
	
  constructor(public jcaService: JcaserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisnotificacionesPage');
		
		this.jcaService.leerNotificaciones('');
  }

	mostrarNotificacion(notificacion) {
	  console.log("notif "+notificacion.nro);

	  this.navCtrl.push(NotificacionPage, {
        noti: notificacion
      });
	}
}
