import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { JcaserviceProvider } from '../../providers/jcaservice/jcaservice';
import { NotificacionPage } from '../notificacion/notificacion';

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
	
	this.jcaService.leerNotificaciones();
  }

    mostrarNotificacion(notificacion) {
      console.log("notif "+notificacion.nro);

      this.navCtrl.push(NotificacionPage, {
        noti: notificacion
      });
    }
}
