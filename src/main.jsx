import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Mainroute/Router';
import Authprovider from './Component/Authentication/Providers/Authprovider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
