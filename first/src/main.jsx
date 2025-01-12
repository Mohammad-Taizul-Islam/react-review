import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Welcome from './Welcome'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<div>
  <Welcome/>
</div>
  </StrictMode>,
)
