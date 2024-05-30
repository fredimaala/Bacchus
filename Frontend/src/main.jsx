import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/Router.jsx'
import './style/index.css'
import { MantineProvider } from '@mantine/core';

const root = document.getElementById('root');

const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>,
)
