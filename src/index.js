import React from 'react';
import ReactDOM from 'react-dom';
import '../src/App.css'
import App from './App';
import {GithubProvider} from './Context/Context';
import {BrowserRouter as Router} from 'react-router-dom';
import {Auth0Provider} from '@auth0/auth0-react';

//dev-m70pad06.us.auth0.com  --  domain id
// UCkd0fQPZwaCC2mmwMbNzlux0N8qnJiC -- client id

ReactDOM.render(
 <Auth0Provider
    domain="dev-m70pad06.us.auth0.com"
    clientId="UCkd0fQPZwaCC2mmwMbNzlux0N8qnJiC"
    redirectUri={window.location.origin}
    cacheLocation = 'localstorage'
>
   <GithubProvider>
     <Router>
       <React.StrictMode>
         <App />
       </React.StrictMode>
     </Router>
   </GithubProvider>
 </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
