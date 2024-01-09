import Container from './container'

export default function Footer() {
  return (
    <footer className="border-t bg-primary-foreground pb-8 pt-4">
      <Container>
        <p>Motomain Rental | {new Date().getFullYear()}</p>
      </Container>
    </footer>
  )
}
