import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { ContactPage } from '../pages/contact/contact';
import { MisexpedientesPage } from '../pages/misexpedientes/misexpedientes';
import { MisnotificacionesPage } from '../pages/misnotificaciones/misnotificaciones';
import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage } from '../pages/login/login';
import { AdherirPage } from '../pages/adherir/adherir';
import { RecuperoPage } from '../pages/recupero/recupero';
import { MisdatosPage } from '../pages/misdatos/misdatos';
import { MilicenciaPage } from '../pages/milicencia/milicencia';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { JcaserviceProvider } from '../providers/jcaservice/jcaservice';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    TabsPage,
		MisdatosPage,
		MilicenciaPage,
		LoginPage,
		AdherirPage,
		RecuperoPage,
		MisexpedientesPage,
		MisnotificacionesPage
  ],
  imports: [
    BrowserModule,
		HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    TabsPage,
		MisdatosPage,
		MilicenciaPage,
		LoginPage,
		AdherirPage,
		RecuperoPage,
		MisexpedientesPage,
		MisnotificacionesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JcaserviceProvider
  ]
})
export class AppModule {}
