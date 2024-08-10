import { NextFunction } from "express"

export interface IAuthenticationMidlewares{
    isAuthenticated(request:Request, response:Response, next:NextFunction):void
    authorize(requiredPermission:string[]):void
}