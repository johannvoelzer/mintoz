import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './GlobalStyles';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from "./components/Authentication";


ReactDOM.render(
  <AuthProvider>
      <React.StrictMode>
        <Router>
          <GlobalStyles />
          <App />
        </Router>
      </React.StrictMode>
  </AuthProvider>,
  document.getElementById('root')
);

reportWebVitals();
