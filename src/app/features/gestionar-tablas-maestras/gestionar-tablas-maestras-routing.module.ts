import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MantenimientoTablasMaestrasComponent } from "./views/mantenimiento-tablas-maestras/mantenimiento-tablas-maestras.component";

export const routes: Routes = [
    {
        path: '',
        component: MantenimientoTablasMaestrasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GestionarTablasMaestrasRoutingModule {}