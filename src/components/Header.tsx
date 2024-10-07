import {Container, Nav, Navbar} from 'react-bootstrap';

const Header = () => {
  return (
    <div>
        <Navbar className='header' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">picShare</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
