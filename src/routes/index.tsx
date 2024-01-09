import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import RootLayout from './layout'
import { Home, ErrorBoundary } from '@/pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])

export default function Routes() {
  return <RouterProvider router={router} />
}
