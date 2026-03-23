import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio';
import { Terrenos } from './pages/terrenos/terrenos';
import { Nosotros } from './pages/nosotros/nosotros';
import { Experiencias } from './pages/experiencias/experiencias';
import { Testimonios } from './pages/testimonios/testimonios';
import { Vecinos } from './pages/vecinos/vecinos';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'terrenos', component: Terrenos },
  { path: 'nosotros', component: Nosotros },
  { path: 'experiencias', component: Experiencias},
  { path: 'testimonios', component: Testimonios},
  { path: 'vecinos', component: Vecinos}
];