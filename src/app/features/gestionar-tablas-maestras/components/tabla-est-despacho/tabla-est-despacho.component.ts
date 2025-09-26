import { Component } from "@angular/core";

@Component({
    selector: 'agrihusa-tabla-est-despacho',
    templateUrl: './tabla-est-despacho.component.html'
})
export class TablaEstDespachoComponent {
    loading: boolean = false;
    datasource: any[] = [];
    totalItems: number = 0;
}