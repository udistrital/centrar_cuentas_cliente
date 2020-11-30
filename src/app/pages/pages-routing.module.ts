import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
    {
      path: 'solicitudesgiros',
      loadChildren: () => import('./solicitudesgiros/solicitudesgiros.module')
      .then(m => m.SolicitudesgirosModule),
    },
    {
      path: 'aprobaciones',
      loadChildren: () => import('./aprobaciones/aprobaciones.module')
      .then(m => m.AprobacionesModule)
    },
    {
      path: 'prueba',
      loadChildren: () => import('./primer-modulo/primer-modulo.module')
      .then(m => m.PrimerModuloModule),
    },
    {
      path: '',
      redirectTo: 'aprobaciones',
      pathMatch: 'full',
    },
    {
      path: '**',
      redirectTo: 'aprobaciones',
      pathMatch: 'full',
    },],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
