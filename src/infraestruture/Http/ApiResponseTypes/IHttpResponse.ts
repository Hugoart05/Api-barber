import { ApiResponse,  } from "./UserHttpResponse";
import { Response} from 'express'

export function sendResponse<T>(
    response:Response, 
    statuscode:number, 
    messages?:string[], 
    data?:T
){
    //Monta resposta da api de forma generica
    const responseApi: ApiResponse = {
        statuscode,
        messages,
        data
    }
    return response.status(statuscode).json(responseApi)
}



