import { useState } from 'react'
import { useTranslation } from 'react-i18next'

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

export function useHome() {
  const { t } = useTranslation()

  const [rentOpen, setRentOpen] = useState(false)
  const [selected, setSelected] = useState<Vehicle | undefined>(undefined)

  function selectVehicle(vehicle: Vehicle) {
    setSelected(vehicle)
    setRentOpen(true)
  }

  function closeModal() {
    setRentOpen(false)
  }

  return {
    datas: { rentOpen, t, vehicles, selected },
    method: { closeModal, setRentOpen, selectVehicle }
  }
}
