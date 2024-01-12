import RentForm from '@/components/rent-form'
import Container from '@/components/container'

import { useHome } from './hooks'
import { ResponsiveDialog } from '@/components/responsive-dialog'

export default function Home() {
  const {
    datas: { rentOpen, t, vehicles },
    method: { closeModal, setRentOpen }
  } = useHome()

  return (
    <>
      <Container className="space-y-8">
        <h1 className="text-2xl font-bold tracking-tight lg:text-4xl">
          {t('landing.title')}
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {t('landing.description')}
        </p>
        <ResponsiveDialog
          open={rentOpen}
          description={'Alva Chervo'}
          setOpen={setRentOpen}
          title={t('form.title')}
          trigger={'Click'}
        >
          <RentForm className="px-4 sm:px-0" closeModal={closeModal} />
        </ResponsiveDialog>
        <div className="grid grid-cols-1 gap-4 py-44 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles?.map((item, idx) => (
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
