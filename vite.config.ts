import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import tsconfigPaths from 'vite-tsconfig-paths'

import 'dotenv/config'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getCache = ({ name, pattern }: any) => ({
  urlPattern: pattern,
  handler: 'NetworkFirst' as const,
  options: {
    cacheName: name,
    expiration: {
      maxEntries: 500,
      maxAgeSeconds: 60 * 60 * 24 * 365 * 2 // 2 years
    },
    cacheableResponse: {
      statuses: [0, 200]
    }
  }
})

function vitePwa() {
  return VitePWA({
    workbox: {
      globPatterns: ['**/*'],
      runtimeCaching: [
        getCache({
          pattern: /^https:\/\/ik.imagekit.io\/shrentws\/motomain-rental\.png/,
          name: 'ik-logo'
        })
      ]
    },
    includeAssets: ['**/*'],
    manifest: {
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      scope: '/',
      start_url: '/',
      short_name: 'Motomain Rental',
      description: 'Motomain Rental',
      name: 'Motomain Rental',
      icons: [
        {
          src: '/logo-192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/logo-256.png',
          sizes: '256x256',
          type: 'image/png'
        },
        {
          src: '/logo-384.png',
          sizes: '384x384',
          type: 'image/png'
        },
        {
          src: '/logo-512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  })
}

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  plugins: [react(), tsconfigPaths(), vitePwa()],
  define: {
    'process.env': process.env
  },
  server: {
    watch: {
      usePolling: true
    },
    host: true,
    strictPort: true,
    port: 4173
  }
})
