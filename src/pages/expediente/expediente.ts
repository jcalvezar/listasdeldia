import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { So_expediente } from '../../models/modelos';

/**
 * Generated class for the ExpedientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-expediente',
  templateUrl: 'expediente.html',
})
export class ExpedientePage {

	expte: So_expediente;
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.expte = navParams.get('expte');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpedientePage');
  }

}
