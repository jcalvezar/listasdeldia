import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { So_notificacion } from '../../models/modelos';

/**
 * Generated class for the NotificacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-notificacion',
  templateUrl: 'notificacion.html',
})
export class NotificacionPage {
	
	noti: So_notificacion;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.noti = navParams.get('noti');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificacionPage');
  }

}
