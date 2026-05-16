import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Prop from './practice.jsx'
import App from './App.jsx'
import RecipeList from './rendering.jsx'
import Counter from './useState.jsx'
import ReactWebpage from './reactApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactWebpage title={"My first react App"} phoneNo={4239874194} />
  </StrictMode>
)