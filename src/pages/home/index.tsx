import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import RentForm from '@/components/rent-form'
import Container from '@/components/container'
import { Button } from '@/components/ui/button'
import { ResponsiveDialog } from '@/components/responsive-dialog'

import { useHome } from './hooks'

export default function Home() {
  const {
    datas: { rentOpen, t, vehicles, selected },
    method: { closeModal, setRentOpen, selectVehicle }
  } = useHome()

  return (
    <>
      <div className="bg-[url('https://ik.imagekit.io/shrentws/bali.jpg')] bg-cover bg-center">
        <div className="bg-primary-foreground/70 py-12 sm:py-16 lg:py-24">
          <Container>
            <h1 className="text-2xl font-bold tracking-tight lg:text-4xl">
              {t('landing.title')}
            </h1>
            <p className="font-medium leading-7 [&:not(:first-child)]:mt-6">
              {t('landing.description')}
            </p>
          </Container>
        </div>
      </div>

      <Container className="space-y-8 py-8 lg:py-12">
        <h1 className="whitespace-pre-wrap text-lg font-bold tracking-tight lg:text-xl">
          {t('landing.rentNow')}
        </h1>
        <div className="grid grid-cols-1 gap-4 py-0 sm:grid-cols-2 lg:grid-cols-3 lg:py-6">
          {vehicles?.map((item, idx) => (
            <Card key={idx} className="w-full bg-primary-foreground">
              <CardHeader>
                <div className="flex h-80 items-center justify-center">
                  <img
                    src={item.imageKitUrl}
                    className="rounded object-cover object-center"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.brand}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button onClick={() => selectVehicle(item)} className="w-full">
                  {t('common.rent')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>

      <ResponsiveDialog
        open={rentOpen}
        setOpen={setRentOpen}
        description={selected?.brand + ' ' + selected?.name}
        title={t('form.title')}
      >
        <RentForm
          className="px-4 sm:px-0"
          closeModal={closeModal}
          selected={selected?.brand + ' ' + selected?.name}
        />
      </ResponsiveDialog>
    </>
  )
}
