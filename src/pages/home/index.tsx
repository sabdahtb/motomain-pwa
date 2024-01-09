import Container from '@/components/container'
import { Button } from '@/components/ui/button'

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

export default function Home() {
  return (
    <>
      <Container className="space-y-8">
        <Button variant={'destructive'}>Test</Button>
        <div className="grid grid-cols-1 gap-4 py-44 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((item, idx) => (
            <div
              key={idx}
              className="space-y-4 border p-8 text-center shadow-lg"
            >
              <img src={item.imageKitUrl} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
