import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { LoadingController } from 'ionic-angular';
import { JcaserviceProvider } from '../../providers/jcaservice/jcaservice';
import { So_usuario } from '../../models/modelos';

import { TabsPage } from '../tabs/tabs';
import { AdherirPage } from '../adherir/adherir';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	almacen: string = 'softcorp-peritajes';
	cities: any = [ { id: 1, nombre: 'Corrientes' }, { id: 2, nombre: 'Paso de la Patria' } ];
	loginStatus: number = 0;
	user: So_usuario = JSON.parse('{"nombre":"","telefono":"","ciudad":0,"direccion":"","id":"","token":""}');
	
  constructor(public jcaService: JcaserviceProvider, public loadingCtrl: LoadingController, private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
		this.checkLogged();
  }

	checkLogged() {
		
		this.storage.get(this.almacen).then((val) => {
			console.log('Leyendo Storage');
			if (val != null) {
				console.log('Tengo Datos, cel:', val.celular);
				this.user = val;
				
				if (this.user.token!='') {
					console.log('Tengo Token. Entro.');
					//this.loginStatus = 1;
				} else {
					console.log('NO Tengo Token. Pido Codigo y Ciudad.');
					this.loginStatus = 2;
				}

			} else {
				console.log('NO Logueado.');
				this.loginStatus = 1;
			}
		});
	}
	
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

	registrar() {
		console.log('registrar');
		this.storage.set('this.almacen', this.user);
		this.loginStatus = 2;
	}
	
	registrar2() {
		console.log('registrar 2');
		
		this.navCtrl.setRoot( TabsPage );
	}
	
	adherir() {
		console.log('adherir');
		this.navCtrl.push( AdherirPage );
	}
	
	goToCorregir() {
		console.log('corregir');
		this.loginStatus = 1;
	}
	
	goToPedir() {
		console.log('volver a pedir');
	}
}
