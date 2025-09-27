import { Component, EventEmitter, Input, Output } from "@angular/core";
import { EstadoDespachoProjection } from "src/app/api/integrador/models";
import { IChangePaginate } from "src/app/shared/components/agrihusa-table-footer/agrihusa-table-footer.component";

@Component({
    selector: 'agrihusa-tabla-est-despacho',
    templateUrl: './tabla-est-despacho.component.html'
})
export class TablaEstDespachoComponent {
    @Input() datasource: EstadoDespachoProjection[] = [];
    @Input() loading = false;
    @Input() totalItems = 0;
    @Input() page = 1;
    @Input() pageSize = 10;
    @Input() filaSeleccionada: any | null = null;

    @Output() seleccionar = new EventEmitter<any>();
    @Output() paginar = new EventEmitter<IChangePaginate>();

    constructor() {}

    onSeleccionarFila(fila: any) {
        this.seleccionar.emit(fila);
    }

    onChangePaginate(event: IChangePaginate) {
        if (!this.totalItems) return;

        const { page, pageSize } = event;
        if (pageSize !== this.pageSize && page > 1) {
            return;
        }
        this.paginar.emit(event);
    }

    get itemId() {
        return this.filaSeleccionada?.idEstadoDespacho ?? 0;
    }
}