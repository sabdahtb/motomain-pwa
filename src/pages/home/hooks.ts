import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface Vehicle {
  name: string
  imageKitUrl: string
  daily?: number
  weekly?: number
  monthly?: number
}

const vehicles: Vehicle[] = [
  {
    name: 'Alva Chervo',
    imageKitUrl: 'https://ik.imagekit.io/shrentws/28952593.png',
    daily: 100000,
    weekly: 500000,
    monthly: 2400000
  },
  {
    name: 'Alva Chervo',
    imageKitUrl: 'https://ik.imagekit.io/shrentws/28952593.png',
    daily: 100000,
    weekly: 500000
  },
  {
    name: 'Alva Chervo',
    imageKitUrl: 'https://ik.imagekit.io/shrentws/28952593.png',
    daily: 100000
  }
]

export function useHome() {
  const { t } = useTranslation()

  const [rentOpen, setRentOpen] = useState(false)

  function closeModal() {
    setRentOpen(false)
  }

  return {
    datas: { rentOpen, t, vehicles },
    method: { closeModal, setRentOpen }
  }
}
