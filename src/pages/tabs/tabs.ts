import { Component } from '@angular/core';

import { MisnotificacionesPage } from '../misnotificaciones/misnotificaciones';
import { ContactPage } from '../contact/contact';
import { MisexpedientesPage } from '../misexpedientes/misexpedientes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MisnotificacionesPage;
  tab2Root = MisexpedientesPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
