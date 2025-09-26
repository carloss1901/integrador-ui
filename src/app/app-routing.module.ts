import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PATH_TABLAS_MAESTRAS } from './core/slug-routes';
import { MantenimientoTablasMaestrasComponent } from './features/gestionar-tablas-maestras/views/mantenimiento-tablas-maestras/mantenimiento-tablas-maestras.component';

const routes: Routes = [
  {
    path: PATH_TABLAS_MAESTRAS,
    component: MantenimientoTablasMaestrasComponent,
    children: [
      {
        path: '',
        loadChildren: () => 
          import('./features/gestionar-tablas-maestras/gestionar-tablas-maestras.module').then(
            (m) => m.GestionarTablasMaestrasModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
