export class ApiError extends  Error {
    status;

    constructor(status , message) {
        super();
        this.status = status
    }
}