import { Component } from '@angular/core';

import { MisnotificacionesPage } from '../misnotificaciones/misnotificaciones';
import { ContactPage } from '../contact/contact';
import { MisexpedientesPage } from '../misexpedientes/misexpedientes';
import { CaluMiListaDelDiaPage } from '../calu-mi-lista-del-dia/calu-mi-lista-del-dia';
import { CaluMisExpedientesPage } from '../calu-mis-expedientes/calu-mis-expedientes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CaluMiListaDelDiaPage;
  tab2Root = CaluMisExpedientesPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
