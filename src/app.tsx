import { lazy } from 'react'

const Routes = lazy(() => import('./routes'))
import { ThemeProvider } from '@/components/theme-provider'

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Routes />
    </ThemeProvider>
  )
}
