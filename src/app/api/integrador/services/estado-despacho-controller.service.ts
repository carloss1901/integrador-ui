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

import { CustomPageEstadoDespachoProjection } from '../models/custom-page-estado-despacho-projection';
import { DesactivarEstDespachoRequest } from '../models/desactivar-est-despacho-request';
import { EstadoDespachoProjection } from '../models/estado-despacho-projection';
import { RegistrarEstDespachoRequest } from '../models/registrar-est-despacho-request';

@Injectable({
  providedIn: 'root',
})
export class EstadoDespachoControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation registrarEstDespacho
   */
  static readonly RegistrarEstDespachoPath = '/estado-despacho/registrar';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registrarEstDespacho()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registrarEstDespacho$Response(params: {
    context?: HttpContext
    body: RegistrarEstDespachoRequest
  }
): Observable<StrictHttpResponse<{
}>> {

    const rb = new RequestBuilder(this.rootUrl, EstadoDespachoControllerService.RegistrarEstDespachoPath, 'post');
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
   * To access the full response (for headers, for example), `registrarEstDespacho$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registrarEstDespacho(params: {
    context?: HttpContext
    body: RegistrarEstDespachoRequest
  }
): Observable<{
}> {

    return this.registrarEstDespacho$Response(params).pipe(
      map((r: StrictHttpResponse<{
}>) => r.body as {
})
    );
  }

  /**
   * Path part for operation obtenerEstDespachoPorId
   */
  static readonly ObtenerEstDespachoPorIdPath = '/estado-despacho/obtener';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `obtenerEstDespachoPorId()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerEstDespachoPorId$Response(params: {
    id_est_despacho: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<EstadoDespachoProjection>> {

    const rb = new RequestBuilder(this.rootUrl, EstadoDespachoControllerService.ObtenerEstDespachoPorIdPath, 'get');
    if (params) {
      rb.query('id_est_despacho', params.id_est_despacho, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EstadoDespachoProjection>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `obtenerEstDespachoPorId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenerEstDespachoPorId(params: {
    id_est_despacho: number;
    context?: HttpContext
  }
): Observable<EstadoDespachoProjection> {

    return this.obtenerEstDespachoPorId$Response(params).pipe(
      map((r: StrictHttpResponse<EstadoDespachoProjection>) => r.body as EstadoDespachoProjection)
    );
  }

  /**
   * Path part for operation listarEstDespacho
   */
  static readonly ListarEstDespachoPath = '/estado-despacho/listar';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listarEstDespacho()` instead.
   *
   * This method doesn't expect any request body.
   */
  listarEstDespacho$Response(params?: {
    page?: number;
    size?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CustomPageEstadoDespachoProjection>> {

    const rb = new RequestBuilder(this.rootUrl, EstadoDespachoControllerService.ListarEstDespachoPath, 'get');
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
        return r as StrictHttpResponse<CustomPageEstadoDespachoProjection>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listarEstDespacho$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listarEstDespacho(params?: {
    page?: number;
    size?: number;
    context?: HttpContext
  }
): Observable<CustomPageEstadoDespachoProjection> {

    return this.listarEstDespacho$Response(params).pipe(
      map((r: StrictHttpResponse<CustomPageEstadoDespachoProjection>) => r.body as CustomPageEstadoDespachoProjection)
    );
  }

  /**
   * Path part for operation desactivarEstDespacho
   */
  static readonly DesactivarEstDespachoPath = '/estado-despacho/desactivar';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `desactivarEstDespacho()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  desactivarEstDespacho$Response(params: {
    context?: HttpContext
    body: DesactivarEstDespachoRequest
  }
): Observable<StrictHttpResponse<{
}>> {

    const rb = new RequestBuilder(this.rootUrl, EstadoDespachoControllerService.DesactivarEstDespachoPath, 'delete');
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
   * To access the full response (for headers, for example), `desactivarEstDespacho$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  desactivarEstDespacho(params: {
    context?: HttpContext
    body: DesactivarEstDespachoRequest
  }
): Observable<{
}> {

    return this.desactivarEstDespacho$Response(params).pipe(
      map((r: StrictHttpResponse<{
}>) => r.body as {
})
    );
  }

}
