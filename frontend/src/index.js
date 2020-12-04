import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './GlobalStyles';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <Suspense fallback={<h3>Loading...</h3>}>
    <React.StrictMode>
      <Router>
        <GlobalStyles />
        <App />
      </Router>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

reportWebVitals();
