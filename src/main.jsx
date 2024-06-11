import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Mainroute/Router';
import Authprovider from './Component/Authentication/Providers/Authprovider';
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
<QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
</QueryClientProvider>
    </Authprovider>
  </React.StrictMode>,
)
