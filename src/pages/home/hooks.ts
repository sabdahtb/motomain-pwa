import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { type CarouselApi } from '@/components/ui/carousel'

import { Vehicle } from '@/types'

const vehicles: Vehicle[] = [
  {
    name: 'Beat FI',
    brand: 'Honda',
    imageKitUrl: 'https://ik.imagekit.io/shrentws/beat.png',
    daily: 100000,
    weekly: 500000,
    monthly: 2400000
  },
  {
    name: 'R1M',
    brand: 'Yamaha',
    imageKitUrl: 'https://ik.imagekit.io/shrentws/r1m.png',
    daily: 100000,
    weekly: 500000
  },
  {
    name: 'ZX6R',
    brand: 'Kawasasi',
    imageKitUrl: 'https://ik.imagekit.io/shrentws/zx6r.png',
    daily: 100000
  }
]

const whychooses = [
  {
    id: 'Sepeda motor terawat dengan baik untuk perjalanan yang lancar',
    en: 'Well-maintained motorcycles for a smooth ride'
  },
  {
    id: 'Periode sewa yang fleksibel sesuai dengan rencana perjalanan Anda',
    en: 'Flexible rental periods to suit your itinerary'
  },
  {
    id: 'Tarif terjangkau tanpa biaya tersembunyi',
    en: 'Affordable rates with no hidden fees'
  },
  {
    id: 'Lokasi pengambilan dan pengembalian yang nyaman',
    en: 'Convenient pick-up and drop-off locations'
  },
  {
    id: 'Layanan ramah dan dapat diandalkan',
    en: 'Friendly and reliable service'
  }
]

export function useHome() {
  const { t, i18n } = useTranslation()

  const [rentOpen, setRentOpen] = useState(false)
  const [selected, setSelected] = useState<Vehicle | undefined>(undefined)
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [carouselCount, setCarouselCount] = useState({ current: 0, count: 0 })

  function selectVehicle(vehicle: Vehicle) {
    setSelected(vehicle)
    setRentOpen(true)
  }

  function closeModal() {
    setRentOpen(false)
  }

  function formatToIDR(number?: number) {
    if (!number) return '-'
    const formattedNumber = number
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    return i18n.language === 'id'
      ? `Rp ${formattedNumber}`
      : `${formattedNumber} IDR`
  }

  useEffect(() => {
    if (!carouselApi) {
      return
    }

    setCarouselCount({
      count: carouselApi.scrollSnapList().length,
      current: carouselApi.selectedScrollSnap() + 1
    })

    carouselApi.on('select', () => {
      setCarouselCount((prev) => ({
        ...prev,
        current: carouselApi.selectedScrollSnap() + 1
      }))
    })
  }, [carouselApi])

  return {
    datas: { rentOpen, t, vehicles, selected, whychooses, carouselCount, i18n },
    method: {
      closeModal,
      setRentOpen,
      selectVehicle,
      formatToIDR,
      setCarouselApi
    }
  }
}
