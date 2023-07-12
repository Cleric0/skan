import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/fonts/ferry_black.otf";
import "./assets/fonts/Inter-VariableFont_slnt,wght.ttf";
import {BrowserRouter} from "react-router-dom";
import {Context, store} from "./store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context.Provider value={store}>
        <App />
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

