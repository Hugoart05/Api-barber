import { Response, Request, NextFunction } from "express";
import { CustomError } from "../helpers/custom-errors/custom-error";
import { sendResponse } from "../infraestruture/Http/ApiResponseTypes/IHttpResponse";

export default function errorMiddleware(
    error:Error,
    request:Request,
    response:Response,
    next:NextFunction
){
    if(error instanceof CustomError){
        return sendResponse(response,error.statuscode,[error.message])
        response.json(error)
    }
    console.log(error)
    return response.status(500).json("erro interno do servidor ")
}