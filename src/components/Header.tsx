import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className='header' expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img 
            src="logo.png" 
            alt="로고" 
            style={{ width: '100px', height: 'auto' }} 
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="nav-text" href="#home1">소개</Nav.Link>
            <Nav.Link className="nav-text" href="#features">자주묻는 질문</Nav.Link>
            <Nav.Link className="nav-text" href="#pricing">문의</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;