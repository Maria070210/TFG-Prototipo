import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './css/index.css'
import './css/LogInStyle.css'
import {CucharaSocialApp} from './CucharaSocialApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CucharaSocialApp/>
  </StrictMode>,
)
