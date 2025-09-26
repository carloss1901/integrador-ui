/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CustomPageEstadoDocumentoProjection } from '../models/custom-page-estado-documento-projection';
import { DesactivarEstDocumentoRequest } from '../models/desactivar-est-documento-request';
import { EstadoDocumentoProjection } from '../models/estado-documento-projection';
import { RegistrarEstDocumentoRequest } from '../models/registrar-est-documento-request';

@Injectable({
  providedIn: 'root',
})
export class EstadoDocumentoControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation registrarEstDocumento
   */
  static readonly RegistrarEstDocumentoPath = '/estado-documento/registrar';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registrarEstDocumento()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registrarEstDocumento$Response(params: {
    context?: HttpContext
    body: RegistrarEstDocumentoRequest
  }
): Observable<StrictHttpResponse<{
}>> {

    const rb = new RequestBuilder(this.rootUrl, EstadoDocumentoControllerService.RegistrarEstDocumentoPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        }>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `registrarEstDocumento$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registrarEstDocumento(params: {
    context?: HttpContext
    body: RegistrarEstDocumentoRequest
  }
): Observable<{
}> {

    return this.registrarEstDocumento$Response(params).pipe(
      map((r: StrictHttpResponse<{
}>) => r.body as {
})
    );
  }

  /**
   * Path part for operation obtenerEstDocumento
   */
  static readonly ObtenerEstDocumentoPath = '/estado-documento/obtener';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `obtenerEstDocumento()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerEstDocumento$Response(params: {
    id_est_documento: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<EstadoDocumentoProjection>> {

    const rb = new RequestBuilder(this.rootUrl, EstadoDocumentoControllerService.ObtenerEstDocumentoPath, 'get');
    if (params) {
      rb.query('id_est_documento', params.id_est_documento, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EstadoDocumentoProjection>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `obtenerEstDocumento$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerEstDocumento(params: {
    id_est_documento: number;
    context?: HttpContext
  }
): Observable<EstadoDocumentoProjection> {

    return this.obtenerEstDocumento$Response(params).pipe(
      map((r: StrictHttpResponse<EstadoDocumentoProjection>) => r.body as EstadoDocumentoProjection)
    );
  }

  /**
   * Path part for operation listarEstDocumento
   */
  static readonly ListarEstDocumentoPath = '/estado-documento/listar';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listarEstDocumento()` instead.
   *
   * This method doesn't expect any request body.
   */
  listarEstDocumento$Response(params?: {
    page?: number;
    size?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CustomPageEstadoDocumentoProjection>> {

    const rb = new RequestBuilder(this.rootUrl, EstadoDocumentoControllerService.ListarEstDocumentoPath, 'get');
    if (params) {
      rb.query('page', params.page, {});
      rb.query('size', params.size, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomPageEstadoDocumentoProjection>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listarEstDocumento$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listarEstDocumento(params?: {
    page?: number;
    size?: number;
    context?: HttpContext
  }
): Observable<CustomPageEstadoDocumentoProjection> {

    return this.listarEstDocumento$Response(params).pipe(
      map((r: StrictHttpResponse<CustomPageEstadoDocumentoProjection>) => r.body as CustomPageEstadoDocumentoProjection)
    );
  }

  /**
   * Path part for operation desactivarEstDocumento
   */
  static readonly DesactivarEstDocumentoPath = '/estado-documento/desactivar';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `desactivarEstDocumento()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  desactivarEstDocumento$Response(params: {
    context?: HttpContext
    body: DesactivarEstDocumentoRequest
  }
): Observable<StrictHttpResponse<{
}>> {

    const rb = new RequestBuilder(this.rootUrl, EstadoDocumentoControllerService.DesactivarEstDocumentoPath, 'delete');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        }>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `desactivarEstDocumento$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  desactivarEstDocumento(params: {
    context?: HttpContext
    body: DesactivarEstDocumentoRequest
  }
): Observable<{
}> {

    return this.desactivarEstDocumento$Response(params).pipe(
      map((r: StrictHttpResponse<{
}>) => r.body as {
})
    );
  }

}
