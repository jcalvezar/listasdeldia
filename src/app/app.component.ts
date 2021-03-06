import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';

// By JCA
import { JcaserviceProvider } from '../providers/jcaservice/jcaservice';
import { MisdatosPage } from '../pages/misdatos/misdatos';
import { MilicenciaPage } from '../pages/milicencia/milicencia';
import { SalirPage } from '../pages/salir/salir';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav; 
	
  rootPage:any = LoginPage;
	
	pages: Array<{title: string, component: any, icon: any}>; 

  constructor(public jcaService: JcaserviceProvider, public menu: MenuController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
			
      //statusBar.styleDefault();
			statusBar.styleLightContent(); 
      splashScreen.hide();
    });
		
    // set our app's pages
    this.pages = [
      { title: 'Mis Datos', component: MisdatosPage, icon: 'person' },
			{ title: 'Mi Licencia', component: MilicenciaPage, icon: 'happy' },
			{ title: 'Salir', component: SalirPage, icon: 'log-out' }
    ];
  }
	
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.push(page.component);
  }
}
