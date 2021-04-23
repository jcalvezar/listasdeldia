import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { JcaserviceProvider } from '../../providers/jcaservice/jcaservice';
import { NotificacionPage } from '../notificacion/notificacion';

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
	  //this.jcaService.leerNotificaciones('');
  }
    
  mostrarNotificacion(notificacion) {
    console.log("notif "+notificacion.nro);

    this.navCtrl.push(NotificacionPage, {
      noti: notificacion
    });
  }

  changeDate(_event) {
    console.log('Dia Actual cambio a: ' + this.jcaService.diaActual);
    //this.jcaService.leerNotificaciones(this.jcaService.diaActual);
  }
}
