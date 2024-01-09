import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'

import './global.css'
import App from './app'

const updateSW = registerSW({
  onNeedRefresh() {
    updateSW(true)
  }
})

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<App />)
