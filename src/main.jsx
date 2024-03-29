import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { BrowserRouter } from 'react-router-dom'
export const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
 </BrowserRouter>
)
