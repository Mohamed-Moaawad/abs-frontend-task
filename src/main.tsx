import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';

import { HeroUIProvider } from '@heroui/react'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './Layout/Layout';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// إنشاء query client
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient} >
      <HeroUIProvider>
        <RouterProvider router={router} />,
      </HeroUIProvider>
    </QueryClientProvider>
  </StrictMode>,
);