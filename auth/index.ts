import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({ domain: 'YOUR_AUTH0_DOMAIN', clientId: 'YOUR_CLIENT_ID' });

const login = () => {
  auth0.webAuth
    .authorize({ scope: 'openid profile email' })
    .then(credentials => {
      // Successfully authenticated
      // Store the credentials
      console.log(credentials);
    })
    .catch(error => console.log(error));
};

const logout = () => {
  auth0.webAuth
    .clearSession({})
    .then(success => {
      // Successfully logged out
    })
    .catch(error => console.log(error));
};
