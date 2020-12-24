import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { LoadingController } from 'ionic-angular';
import { JcaserviceProvider } from '../../providers/jcaservice/jcaservice';
import { So_usuario } from '../../models/modelos';

import { TabsPage } from '../tabs/tabs';
import { AdherirPage } from '../adherir/adherir';
import { RecuperoPage } from '../recupero/recupero';


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

	cities: any = [ { id: 1, nombre: 'Corrientes' }, { id: 2, nombre: 'Paso de la Patria' } ];
	loginStatus: number = 0;
	user: So_usuario = JSON.parse('{"nombre":"","apellido":"","email":"","password":"","id":"","token":""}');
	
  constructor(public jcaService: JcaserviceProvider, public loadingCtrl: LoadingController, private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
		this.checkLogged();
  }

	checkLogged() {
		
		this.storage.get(this.jcaService.almacen).then((val) => {
			console.log('Leyendo Storage');
			if (val != null) {
				console.log('Tengo Datos:', val.email);
				console.log('Tengo Datos:', val.token);
				this.user = val;
				this.jcaService.usuario = val;
				
				if (this.user.token!='') {
					console.log('Tengo Token. Entro.');
					//this.loginStatus = 1;
					this.jcaService.loginState = true;
					this.navCtrl.setRoot( TabsPage );
				} else {
					console.log('NO Tengo Token. Pido.');
					//this.loginStatus = 2;
				}

			} else {
				console.log('NO Logueado.');
				//this.loginStatus = 1;
			}
		});
	}
	
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
	
	ingresar() {
		console.log('ingresando');
		
		this.jcaService.login(this.user.email, this.user.password).then( () => {
			this.navCtrl.setRoot( TabsPage );
		}, () => {
			console.log("error de logueo")
		});
		
	}
	
	registro() {
		console.log('registro');
		
		this.navCtrl.push( AdherirPage );
	}
	
	recupero() {
		console.log('recupero');
		
		this.navCtrl.push( RecuperoPage );
	}
}
