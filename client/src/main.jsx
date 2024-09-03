import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './components/redux/store.js';
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
const { createRoot } = ReactDOM;
import { StrictMode } from 'react';
// import { Provider } fro/m 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
