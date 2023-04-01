import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <App />
    </Layout>
  </BrowserRouter>,
  document.getElementById('root')
);


