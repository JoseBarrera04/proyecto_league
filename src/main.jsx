import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { store } from "./redux/store.jsx";
import { Provider } from 'react-redux'
import Navbar from "./components/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store = {store}>
          <BrowserRouter>
              <Navbar/>
              <App/>
          </BrowserRouter>
      </Provider>
  </StrictMode>
)