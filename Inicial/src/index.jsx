import React from 'react'
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { AuthContextProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  )