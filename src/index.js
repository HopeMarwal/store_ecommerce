import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { StateContext } from './context/CartContext';
import { CategoriesContext } from './context/CategoriesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>

      <StateContext>

        <CategoriesContext>

          <App />

        </CategoriesContext>

      </StateContext>
      
    </BrowserRouter>
   
  </React.StrictMode>
);
reportWebVitals();
