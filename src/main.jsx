import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Provider} from "react-redux";
import Navbar from "./components/navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Navbar/>
          <App/>
      </BrowserRouter>
  </StrictMode>,
)