import { Component, Input } from "@angular/core";

@Component({
    selector: 'agrihusa-no-results',
    templateUrl: './agrihusa-no-results.component.html'
})
export class AgrihusaNoResultsComponent {
    @Input() message: string = 'No se encontraron resultados!';
}