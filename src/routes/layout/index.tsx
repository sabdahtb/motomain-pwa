import { Outlet, useNavigation } from 'react-router-dom'

import { Footer, Loading, Navbar } from '~/components'

export default function RootLayout() {
  const navigation = useNavigation()

  if (navigation.state === 'loading') {
    return <Loading />
  }

  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex-1">
        <Navbar />
        <Outlet />
      </section>
      <Footer />
    </main>
  )
}
