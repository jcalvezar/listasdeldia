import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { JcaserviceProvider } from '../../providers/jcaservice/jcaservice';
import { LoginPage } from '../../pages/login/login';

/**
 * Generated class for the SalirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-salir',
  templateUrl: 'salir.html',
})
export class SalirPage {
	
  constructor(private storage: Storage, public jcaService: JcaserviceProvider, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalirPage');
		
		this.storage.remove(this.jcaService.almacen).then(() => {
			console.log('Logging Out');
			this.jcaService.loginState = false;
			//this.app.getRootNav().setRoot(LoginPage);
			this.navCtrl.setRoot(LoginPage);
		});
  }

}
