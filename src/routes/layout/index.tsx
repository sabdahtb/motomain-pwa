import { Outlet } from 'react-router-dom'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

export default function RootLayout() {
  return (
    <main className="layout-container">
      <Navbar />
      <section className="py-12">
        <Outlet />
      </section>
      <Footer />
      <div className="fixed bottom-8 right-4 cursor-pointer lg:bottom-4">
        <img
          src="https://ik.imagekit.io/shrentws/icon/whatsapp.png"
          alt="_wa"
          className="w-12"
        />
      </div>
    </main>
  )
}
