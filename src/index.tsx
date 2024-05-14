import ReactDOM from 'react-dom/client'
import "./index.css";
import App from "./App";
import React from 'react';
import { AuthProvider } from './context/AuthProvider';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
)

// serviceWorkerRegistration.register();

