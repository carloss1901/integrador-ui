/* tslint:disable */
/* eslint-disable */
import { ErrorCampo } from './error-campo';
export interface ErrorGenerico {
  codigo?: string;
  errores?: Array<ErrorCampo>;
  logerror?: string;
  mensaje?: string;
  tipMen?: number;
}
