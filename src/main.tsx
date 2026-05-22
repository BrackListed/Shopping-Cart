import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { Store } from './Store.ts'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from './Cart.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store = {Store}>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<App />}></Route>
          <Route path = "/Cart" element = {<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>,
  </Provider>
)
