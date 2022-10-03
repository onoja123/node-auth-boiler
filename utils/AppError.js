class AppError extends Error{
    constructor(message, statusCode){
        super(message)

        this.statusCode = this.statusCode
        this.status = `${this.statusCode}`.startsWith('4') ? 'fail' : 'error'

        this.isOperational = undefined

        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = AppError;