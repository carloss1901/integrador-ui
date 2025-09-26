import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'agrihusa-topbar',
	templateUrl: 'agrihusa-topbar.component.html',
	styleUrls: ['agrihusa-topbar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgrihusaTopBarComponent {
    @Input() titulo = '';
	@Input() subtitulo = '';
	@Input() conBoton = true;
	@Input() btnIcono = 'x';
	@Input() btnTexto = 'x';
	@Input() btnLink = 'x';
	@Input() asLink = true; // necesita pasarle routerlink
	@Input() isLocalRoute = true;
	@Input() toUrl: string = '';
	@Input() showCancel: boolean = true;
	@Output() click = new EventEmitter();
}