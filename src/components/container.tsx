import { cn } from '@/lib/utils'

interface Props {
  className?: string
  children: React.ReactNode
}

export default function Container({ children, className }: Props) {
  return (
    <section
      className={cn(
        'mx-auto w-full max-w-screen-xl px-4 sm:px-8 lg:px-20',
        className
      )}
    >
      {children}
    </section>
  )
}
