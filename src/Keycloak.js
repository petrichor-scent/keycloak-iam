import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
    url: 'http://localhost:8080',
    realm: 'my-realm',
    clientId: 'my-client'
});

try {
    const authenticated = await keycloak.init({
            pkceMethod: "S256",
            // onLoad: "login-required",
        }
    );
    console.log(`User is ${authenticated ? 'authenticated' : 'not authenticated'}`);
} catch (error) {
    console.error('Failed to initialize adapter:', error);
}

export async function login() {
    keycloak.login({redirectUri: 'http://localhost:80'})
        .then(() => console.log("Login successfully"))
        .catch(() => console.log("Login failed"));
}

export function logout() {
    keycloak.logout({redirectUri: 'http://localhost:80'})
        .then(() => console.log("Logout successfully"))
        .catch(() => console.log("Logout failed"));
}