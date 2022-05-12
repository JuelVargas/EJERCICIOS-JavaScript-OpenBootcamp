const winston = require("winston");

const logger = winston.createLogger({
    level: 'error',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
    
    ],
});

function funcionError() {
    throw new Error("oh, vaya un error.")
}

try {
    funcionError()
} catch (e) {
    logger.error(e)

}