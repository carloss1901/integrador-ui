import { Injectable } from '@angular/core';
import { ErrorCampo } from 'src/app/core/models/error-campo';
import { ErrorDetalleModel, IHttpResponseError } from 'src/app/core/models/error-detalle.model';
import { ErrorModel } from 'src/app/core/models/error.model';

/**
 * @description Define la estructura de una alerta para mostrar
 * mensajes al usuario con estilos, duración y posibles errores.
 */
interface Alerta {
  message?: string;
  classname?: string;
  delay?: number;
  title?: string;
  errores?: ErrorDetalleModel[] | ErrorCampo[];
}

/**
 * @description Servicio centralizado para mostrar mensajes
 * tipo toast en distintas categorías: éxito, error, info, etc.
 */
@Injectable({ providedIn: 'root' })
export class AlertService {

  // Lista actual de toasts a ser renderizados
  toasts: Alerta[] = [];

  /**
   * @description Muestra una alerta de éxito.
   * @param message Mensaje a mostrar
   * @param duration Duración en milisegundos
   */
  success(message: string, duration = 5000) {
    this.show(message, 'bg-alert-success mb-1', duration);
  }

  /**
   * @description Muestra una alerta de error con posibles detalles.
   * @param message Mensaje principal
   * @param errores Lista de errores
   * @param delay Tiempo visible del toast
   */
  error(
    message: string = 'Error',
    errores: ErrorDetalleModel[] = [],
    delay = 5000
  ) {
    this.show(message, 'bg-alert-danger mb-1', delay, errores);
  }

  errorModel(errorModel: ErrorModel) {
    const message: string = `${errorModel.codigo} - ${errorModel.mensaje}`;
    this.show(message, 'bg-alert-danger mb-1', 10000, errorModel.errores);
  }

  errorCampo(errores: ErrorCampo[] = []) {
    this.showListError(errores, 6000, 'Error');
  }

  warning(
    message: string,
    errores: ErrorDetalleModel[] = [],
    duration = 6000
  ) {
    this.show(message, 'bg-alert-warning mb-1', duration, errores);
  }

  info(message: string = '', errores: ErrorDetalleModel[] = [], delay = 5000) {
    this.show(message, 'bg-alert-info mb-1', delay, errores);
  }

  show(
    message: string,
    clasname: string,
    delay: number,
    errores?: ErrorDetalleModel[]
  ) {
    this.toasts.push({
      message: message,
      classname: clasname,
      delay: delay,
      errores: errores,
    });
  }

  showListError(errores: ErrorCampo[], delay: number, message?: string) {
    this.toasts.push({
      message: message,
      classname: 'bg-alert-danger mb-1',
      delay: delay,
      errores: errores,
    });
  }

  remove(toast: any | null) {
    this.toasts = this.toasts.filter((t) => t != toast);
  }
}
