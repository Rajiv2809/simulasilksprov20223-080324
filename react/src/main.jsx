import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { StateProvider } from './contexts/Context';
import { RouterProvider } from 'react-router-dom';
import router from './Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider>
      <RouterProvider router={router}/>
    </StateProvider>
  </React.StrictMode>,
)
