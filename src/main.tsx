import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
      }}>
          <ThemeProvider>
              <App />
          </ThemeProvider>
      </BrowserRouter>
  </StrictMode>,
)
