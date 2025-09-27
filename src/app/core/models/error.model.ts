import { ErrorDetalleModel } from "./error-detalle.model"

export interface ErrorModel{
    codigo: string,
    mensaje: string,
    errores?: ErrorDetalleModel[]
}