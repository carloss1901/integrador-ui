import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from "@angular/core";

type IColor =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger'
	| 'info'
	| 'light'
	| 'dark';

type IVariant = 'flat' | 'outlined';

type ISize = 'small' | 'medium' | 'large';

@Component({
  selector: 'agrihusa-button',
	templateUrl: 'agrihusa-button.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgrihusaButtonComponent implements OnInit {
  @Input() texto = 'Aceptar';
	@Input() disabled = false;
	@Input() loading = false;
	@Input() loadingTexto = 'Guardado...';
	@Input() esIcono = false;
	@Input() icon = 'save';
	@Input() color: IColor = 'primary';
	@Input() variant: IVariant = 'flat';
	@Input() size: ISize = 'medium';
	@Input() classes: string = '';
	@Input() block: boolean = false;

  @HostBinding('style.pointer-events') get pEvents(): string {
		if (this.disabled) {
			return 'none';
		}
		return 'auto';
	}

	@HostBinding('style.display') get pDisplay(): string {
		if (this.block) {
			return 'block';
		}
		return 'inline-block';
	}

	constructor() {}

  ngOnInit() {}

	getClasses() {
		const classes = ['btn'];

		const classVariant = this.getClassVariantColor(this.variant);
		if (classVariant) classes.push(classVariant);

		const classSize = this.getClassSize(this.size);
		if (classSize) classes.push(classSize);

		if (this.esIcono) classes.push('btn-icon');

		if (this.block) classes.push('w-100 d-flex');

		if (this.classes.trim().length > 0) classes.push(this.classes);

		return classes.join(' ');
	}

	private getClassVariantColor(variant: IVariant): string {
		if (variant === 'outlined') {
			return `btn-outline-${this.color}`;
		}

		// flat variant
		return `btn-${this.color}`;
	}

	private getClassSize(size: ISize) {
		switch (size) {
			case 'small':
				return 'btn-sm';
			case 'large':
				return 'btn-lg';
			default:
				return '';
		}
	}

  get localTexto() {
		if (this.esIcono) return '';

		return this.texto;
	}

	get isDisabled() {
		return this.loading || this.disabled;
	}

	get isIcon() {
		return typeof this.icon === 'string' && this.icon.trim().length > 0;
	}

	get localDisabled() {
		return this.loading;
	}
}