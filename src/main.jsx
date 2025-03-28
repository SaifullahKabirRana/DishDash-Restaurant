import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider';
import { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <div className='max-w-[2560px] mx-auto'>
          <RouterProvider router={router} />
        </div>
        <Toaster></Toaster>
      </HelmetProvider>
    </QueryClientProvider>
  </AuthProvider>

)
