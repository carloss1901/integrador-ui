export interface ErrorDetalleModel {
	campo: string;
	mensaje: string;
}

export type IHttpResponseError = {
	codigo?: string;
	errores?: ErrorDetalleModel[];
	mensaje?: string;
	message?: string;
	tipMen?: number;
	status?: number;
};

export enum TIPO_MENSAJE_ERR_VAL {
	DANGER = 0,
	WARNING = 1,
	INFO = 2,
}
