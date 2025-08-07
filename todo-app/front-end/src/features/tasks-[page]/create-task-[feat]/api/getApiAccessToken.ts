import { createAuth0Client } from "@auth0/auth0-spa-js";

export default async function createClientAndGetToken() {
    const auth0 = await createAuth0Client({
        domain: 'YOUR_DOMAIN',
        clientId: 'YOUR_CLIENT_ID',
        authorizationParams: {
            audience: 'https://your-api-identifier',
            redirect_uri: window.location.origin
        }
    });

    const token = await auth0.getTokenSilently();

    return token;
}