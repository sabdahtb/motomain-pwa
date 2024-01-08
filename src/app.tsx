import { lazy } from 'react'

const Routes = lazy(() => import('./routes'))

export default function App() {
  return <Routes />
}
