export class CustomError extends Error{
    public readonly statuscode: number
    constructor(message:string, statuscode: number) {
        super(message)
        this.statuscode = statuscode
    }
}
