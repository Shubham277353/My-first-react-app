import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Prop from './practice.jsx'
import App from './App.jsx'
import RecipeList from './rendering.jsx'
import Counter from './useState.jsx'
import TrafficLight from './trafficLightSim.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TrafficLight/>
  </StrictMode>
)