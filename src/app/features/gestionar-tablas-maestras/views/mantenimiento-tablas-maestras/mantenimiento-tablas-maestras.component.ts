import { Component, OnInit } from '@angular/core';
import { EstadoDespachoProjection } from 'src/app/api/integrador/models';
import { EstadoDespachoControllerService } from 'src/app/api/integrador/services';
import { IHttpResponseError } from 'src/app/core/models/error-detalle.model';
import { IChangePaginate } from 'src/app/shared/components/agrihusa-table-footer/agrihusa-table-footer.component';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

@Component({
  selector: 'app-mantenimiento-tablas-maestras',
  templateUrl: './mantenimiento-tablas-maestras.component.html',
  styleUrls: ['./mantenimiento-tablas-maestras.component.scss']
})
export class MantenimientoTablasMaestrasComponent implements OnInit{
	getNombreMantenimiento = "Mantenimiento de Tablas Maestras";
  filaSeleccionada: any = null;
  loading: boolean  = false;
  dataEstDespacho: EstadoDespachoProjection[] = [];
  totalItemsEstDespacho: number = 0;
  page: number = 1;
  pageSize: number = 10;

  constructor(
    private estDespachoService: EstadoDespachoControllerService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
  }

  grillaEstadoDespacho() {
    this.loading = true;
    this.estDespachoService.listarEstDespacho({
      page: this.page,
      size: this.pageSize
    }).pipe()
    .subscribe({
      next: (res: any) => {
        this.dataEstDespacho = res.data || [];
        this.totalItemsEstDespacho = res.pageable.totalElements || 0;
        this.loading = false;
      },
      error: (error: IHttpResponseError) => {
        this.alertService.error(error.mensaje);
      }
    })
  }

  onSeleccionarItemActivo(item: any) {
    this.filaSeleccionada = item;
  }

  onChangePaginate(event: IChangePaginate) {
    this.filaSeleccionada = null;
    this.page = event.page;
    this.pageSize = event.pageSize;
    this.grillaEstadoDespacho();
  }

  onTabActivated(tabId: number) {
    if (tabId === 1) {
      this.onLimpiar();
      this.page = 1;
      this.pageSize = 10;
      this.grillaEstadoDespacho();
    } else if (tabId === 2) {

    }
  }

  onLimpiar() {
    this.dataEstDespacho = [];
    this.totalItemsEstDespacho = 0;
  }
}
