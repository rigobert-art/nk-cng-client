import ReactDOM from 'react-dom/client'
import "./index.css";
import App from "./App";
import React from 'react';
import { AppProvider } from './context/AppProvider';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
)

// serviceWorkerRegistration.register();

