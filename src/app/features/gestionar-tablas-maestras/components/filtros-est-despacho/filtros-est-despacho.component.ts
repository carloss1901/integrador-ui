import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: 'agrihusa-est-despacho-filtros',
	templateUrl: './filtros-est-despacho.component.html'
})
export class FiltrosEstDespachoComponent implements OnInit {
    frmFiltro!: FormGroup;

    constructor(
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {
        this.initFormulario();
    }

    private initFormulario() {
        this.frmFiltro = this.fb.group({
            txtDescripcion: [null],
            cboEstado: [null]
        })
    }
}