import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
//context
import { StateContext } from './context/CartContext';
import { CategoriesContext } from './context/CategoriesContext';
import { ThemeContext } from './context/ThemeContext';
//auth
import { Auth0Provider } from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root'));

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

root.render(
  //<React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri = {window.location.origin}
    >

      <BrowserRouter>

        <StateContext>

          <CategoriesContext>

            <ThemeContext>
              <App />
            </ThemeContext>

           

          </CategoriesContext>

        </StateContext>
        
      </BrowserRouter>
      
    </Auth0Provider>
   
  //</React.StrictMode>
);
reportWebVitals();
