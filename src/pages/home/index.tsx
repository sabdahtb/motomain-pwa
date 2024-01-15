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
import { Mail, Phone, MapPin } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

import { useHome } from './hooks'

export default function Home() {
  const {
    datas: { rentOpen, t, vehicles, selected, whychooses, carouselCount, i18n },
    method: {
      closeModal,
      setRentOpen,
      selectVehicle,
      formatToIDR,
      setCarouselApi
    }
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
        <div className="grid grid-cols-1 gap-4 py-0 sm:grid-cols-2 lg:py-6 xl:grid-cols-3">
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
                <div className="py-3">
                  <div
                    className={
                      'grid grid-cols-1 gap-x-[2px] gap-y-[1px] bg-secondary lg:grid-cols-3'
                    }
                  >
                    <div className="w-full bg-primary-foreground py-1 text-center">
                      <p className="font-medium">{t('common.daily')}</p>
                      <CardDescription>
                        {formatToIDR(item.daily)}
                      </CardDescription>
                    </div>
                    <div className="w-full bg-primary-foreground py-1 text-center">
                      <p className="font-medium">{t('common.weekly')}</p>
                      <CardDescription>
                        {formatToIDR(item.weekly)}
                      </CardDescription>
                    </div>
                    <div className="w-full bg-primary-foreground py-1 text-center">
                      <p className="font-medium">{t('common.monthly')}</p>
                      <CardDescription>
                        {formatToIDR(item.monthly)}
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => selectVehicle(item)} className="w-full">
                  {t('common.rent')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div>
          <h1 className="text-lg font-bold tracking-tight lg:text-xl">
            {t('landing.whyChoose')}
          </h1>
          <ul className="mt-4 list-inside list-disc">
            {whychooses.map((item, idx) => (
              <li key={idx} className="text-secondary-foreground">
                {i18n.language === 'id' ? item['id'] : item['en']}
              </li>
            ))}
          </ul>

          <div className="flex w-full justify-center pt-8">
            <Carousel
              opts={{ loop: true }}
              plugins={[
                Autoplay({
                  delay: 2000
                })
              ]}
              setApi={setCarouselApi}
              className="w-full max-w-md"
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <Card className="bg-primary-foreground">
                      <CardContent className="flex aspect-square items-center justify-center pt-6">
                        <img
                          src="https://ik.imagekit.io/shrentws/testimoni.webp"
                          alt="_testimoni"
                          className="h-full w-full rounded-lg object-cover object-center"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <div className="hidden sm:block">
                <CarouselNext />
              </div>
            </Carousel>
          </div>

          <div className="py-2 text-center text-sm text-muted-foreground">
            {carouselCount.current} / {carouselCount.count}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-2">
          <div>
            <h1 className="text-lg font-bold tracking-tight lg:text-xl">
              {t('landing.contact')}
            </h1>
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin />
                <p>Jalan bali indah No 99 Kuta 80362, Bali - Indonesia</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail />
                <p>motomain.rental@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone />
                <p>+6289101112345</p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="w-full overflow-hidden rounded-lg"
              dangerouslySetInnerHTML={{
                __html:
                  '<div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=bali&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><style>.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style></div></div>'
              }}
            />
          </div>
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
