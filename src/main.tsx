import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toaster />
  </StrictMode>,
)
