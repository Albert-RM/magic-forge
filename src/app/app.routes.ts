import { Routes } from '@angular/router';
import { CardListComponent } from './components/card-list/card-list.component';

export const routes: Routes = [
  { path: '', component: CardListComponent }, // Esto solo funciona si es standalone
];


