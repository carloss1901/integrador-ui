/* tslint:disable */
/* eslint-disable */
import { CustomPageable } from './custom-pageable';
import { EstadoDocumentoProjection } from './estado-documento-projection';
export interface CustomPageEstadoDocumentoProjection {
  data?: Array<EstadoDocumentoProjection>;
  pageable?: CustomPageable;
}
