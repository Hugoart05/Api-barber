import { CustomError } from "./custom-error";

export class DataBaseError extends CustomError{
    constructor(message:string){
        super(message, 500)
    }
}