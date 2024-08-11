import { CustomError } from "./custom-error";

export class LimitExceededError extends CustomError{
    constructor(message:string){
        super(message, 403)
    }
}