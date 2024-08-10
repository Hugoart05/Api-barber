import { NextFunction } from 'express'
import {IUsuarioRepository} from '../../domain/repository/IUsuarioRepository'
import {IAuthenticationMidlewares} from '../../types/IAuthenticationMidlewares'

export class AuthenticationMiddlewares implements IAuthenticationMidlewares {
    constructor(private userRepository:IUsuarioRepository){}

    isAuthenticated(request: Request, response: Response, next: NextFunction): void {
        // const authHeader = request.headers
        // const token = authHeader && authHeader.split(' ')
        // console.log(token, authHeader)
    }

    authorize(requiredPermission: string[]): void {
        throw new Error('Method not implemented.')
    }

    
}