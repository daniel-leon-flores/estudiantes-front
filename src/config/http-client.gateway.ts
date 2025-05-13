import AxiosClient from './axios';
import { AxiosRequestConfig } from 'axios';
import {ResponseApi, TypesResponse} from "@/kernel/types";
import Api from "@/config/http-client.gateway";

const errorMessages: Record<string, {title: string, message: string }> = {
    SERVER_ERROR:{
        title: 'Error en el servidor',
        message: 'Ha ocurrido un error en el servidor, vuelve a intentarlo más tarde.'
    },
    UNEXPECTED_ERROR:{
        title: 'Error inesperado',
        message: 'Ha ocurrido un error inesperado, vuelve a intentarlo más tarde.'
    },
    WRONG_DATA:{
        title: 'Datos incorrectos',
        message: 'Los datos ingresados son incorrectos'
    }
}

export default {
    get(endpoint: string){
        return AxiosClient.get(endpoint);
    },
    post(endpoint: string, payload: any, config?: AxiosRequestConfig){
        return AxiosClient.post(endpoint, payload, config);
    },
    put(endpoint: string, payload: any){
        return AxiosClient.put(endpoint, payload);
    },
    delete(endpoint: string){
        return AxiosClient.delete(endpoint);
    }
}

export async function handleRequest<T, P = undefined>(method: "post" | "put" | "get" | "delete", url: string, payload?: P ): Promise<ResponseApi<T>> {
    try{
        const {status, data} = await (Api as any)[method](url, payload);
        return {
            result: status === 200 ? data : null,
            metadata:  status === 200 ? data.metadata : null,
            type: data.type,
            text: data.text
        }
    }catch (error: any){
        return {
            result: null,
            metadata: null,
            type: TypesResponse.ERROR,
            text: error.response?.data?.text || `Error inesperado en solicitud ${method} `
        }
    }
}