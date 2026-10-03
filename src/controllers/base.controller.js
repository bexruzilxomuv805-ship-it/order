export class BaseController {
    constructor() {
        this.handleError = this.handleError.bind(this);
        this.sendSuccess = this.sendSuccess.bind(this);
    }

    sendSuccess(res, data, statusCode = 200) {
        return res.status(statusCode).json(data);
    }

    handleError(res, error) {
        const statusCode = error.statusCode || 500;
        return res.status(statusCode).json({
            error: error.message
        });
    }
}
