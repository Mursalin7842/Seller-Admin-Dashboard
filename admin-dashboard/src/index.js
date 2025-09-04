import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './services/keycloak';

const root = ReactDOM.createRoot(document.getElementById('root'));

const initOptions = {
  onLoad: 'login-required',
};

root.render(
  <React.StrictMode>
    <ReactKeycloakProvider authClient={keycloak} initOptions={initOptions}>
      <App />
    </ReactKeycloakProvider>
  </React.StrictMode>
);

reportWebVitals();
