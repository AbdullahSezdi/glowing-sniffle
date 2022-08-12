import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from "react-router-dom";

import App from './App';

import "./styles/index.scss";

import './i18n';

import { AuthProvider } from './contexts/auth-context';
import { UserPrefProvider } from './contexts/user-prefences';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.Fragment>
    <AuthProvider>
      <UserPrefProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserPrefProvider>
    </AuthProvider>
  </React.Fragment>
);