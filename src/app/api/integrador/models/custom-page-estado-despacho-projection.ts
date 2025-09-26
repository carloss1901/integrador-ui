/* tslint:disable */
/* eslint-disable */
import { CustomPageable } from './custom-pageable';
import { EstadoDespachoProjection } from './estado-despacho-projection';
export interface CustomPageEstadoDespachoProjection {
  data?: Array<EstadoDespachoProjection>;
  pageable?: CustomPageable;
}
