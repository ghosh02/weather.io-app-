import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DataProvider from "./context/DataProvider";


ReactDOM.createRoot(document.getElementById('root')).render(
<DataProvider>
<StrictMode>
 <App />
 </StrictMode>
 </DataProvider>
)
