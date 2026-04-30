import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Prop from './practice.jsx'
import App from './App.jsx'
import Rendering from './rendering.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rendering/>
  </StrictMode>
)