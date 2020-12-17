import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { JcaserviceProvider } from '../../providers/jcaservice/jcaservice';

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

	tipo: string = '1';
	
  constructor(public jcaService: JcaserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisexpedientesPage');
  }

}
