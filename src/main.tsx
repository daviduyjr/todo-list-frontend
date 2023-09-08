import React from 'react'
import App from './views'
import './index.css'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './state';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

