import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import { AppStateProvider } from './hooks/use-app-state';
import { reducer, initialState } from './reducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppStateProvider initialState={initialState} reducer={reducer}>
    <App />
  </AppStateProvider>
);
