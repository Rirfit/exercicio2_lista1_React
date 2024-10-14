import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Mensagem from './components/Mensagem'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mensagem name='Gabriel'/>
    <Mensagem name='Samuel'/>
    <Mensagem name='Leticia'/>
    <Mensagem name='Kethelyn'/>
  </StrictMode>,
)
