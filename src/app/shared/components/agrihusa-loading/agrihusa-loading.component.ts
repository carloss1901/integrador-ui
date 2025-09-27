import { Component, Input } from "@angular/core";

@Component({
    selector: 'agrihusa-loading',
    templateUrl: './agrihusa-loading.component.html',
    styleUrls: ['./agrihusa-loading.component.scss']
})
export class AgrihusaLoadingComponent {
    @Input() message: string | undefined = "Estamos cargando la información solicitada";
}