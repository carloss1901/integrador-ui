import { NgModule } from "@angular/core";
import { MantenimientoTablasMaestrasComponent } from "./views/mantenimiento-tablas-maestras/mantenimiento-tablas-maestras.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { GestionarTablasMaestrasRoutingModule } from "./gestionar-tablas-maestras-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgBootstrapModule } from "src/app/bootstrap/bootstrap.module";
import { FiltrosEstDespachoComponent } from "./components/filtros-est-despacho/filtros-est-despacho.component";
import { TablaEstDespachoComponent } from "./components/tabla-est-despacho/tabla-est-despacho.component";

@NgModule({
    declarations: [
        MantenimientoTablasMaestrasComponent,
        FiltrosEstDespachoComponent,
        TablaEstDespachoComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        GestionarTablasMaestrasRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgBootstrapModule
    ]
})
export class GestionarTablasMaestrasModule {}