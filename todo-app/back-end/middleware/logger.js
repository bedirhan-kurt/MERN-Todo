require('dotenv').config();

const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE;

function requestLogger(req, res, next) {
    console.log('AUTH0_DOMAIN:', AUTH0_DOMAIN);
    console.log('AUTH0_AUDIENCE:', AUTH0_AUDIENCE);
    console.log(`${req.method} ${req.url} ${req.headers['authorization']}`);
    next();
}


module.exports = requestLogger;