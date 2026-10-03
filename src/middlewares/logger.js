class Logger {
    constructor() {
       this.log = this.log.bind(this);
    }

    log(req, res, next) {
        console.log(req.method, req.url);
        next();
    }
}

export default new Logger();