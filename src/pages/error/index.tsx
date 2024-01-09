import { NavLink, isRouteErrorResponse, useRouteError } from 'react-router-dom'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

export default function ErrorBoundary() {
  const error = useRouteError()

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <div className="flex flex-1 flex-col">
          <Navbar />
          <div className=" flex flex-1 flex-col items-center justify-center px-5 text-center">
            {isRouteErrorResponse(error) ? (
              <>
                <p className="text-6xl font-semibold">{error.status}</p>
                <p className="mt-2 text-lg sm:text-2xl">
                  Page {error.statusText}
                </p>
              </>
            ) : (
              <>
                <p className="text-6xl font-semibold">Oops!</p>
                <p className="mt-2 text-lg sm:text-2xl">
                  Sorry, an unexpected error has occurred when loading your
                  page.
                </p>
              </>
            )}
            <NavLink to={'/'}>
              <button className="my-6 rounded border-none bg-gray-700 px-4 py-2 text-white outline-none">
                Back to Home
              </button>
            </NavLink>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
