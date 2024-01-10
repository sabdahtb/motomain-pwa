import Container from './container'
import { LangToggle } from './lang-toggle'
import { ModeToggle } from './mode-toggle'

export default function Navbar() {
  return (
    <nav className="sticky inset-x-0 top-0 z-30 w-full border-b bg-primary-foreground/50 shadow-sm backdrop-blur-md transition-all">
      <Container className="flex items-center justify-between py-3">
        <p className="text-3xl sm:text-4xl">Navbar</p>
        <div className="flex items-center gap-2">
          <LangToggle />
          <ModeToggle />
        </div>
      </Container>
    </nav>
  )
}
