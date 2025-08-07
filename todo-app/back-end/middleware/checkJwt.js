const { auth } = require("express-oauth2-jwt-bearer");
require("dotenv").config();

const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE;

const checkJwt = auth({
    audience: AUTH0_AUDIENCE,
    issuerBaseURL: `https://${AUTH0_DOMAIN}/`,
    algorithms: ["RS256"],
});

module.exports = checkJwt;