import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand to="/" as={Link}>
        React HN App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link to="/news" as={Link}>
            News
          </Nav.Link>
          <Nav.Link to="/newest" as={Link}>
            Newest
          </Nav.Link>
          <Nav.Link to="/ask" as={Link}>
            Ask
          </Nav.Link>
          <Nav.Link to="/show" as={Link}>
            Show
          </Nav.Link>
          <Nav.Link to="/jobs" as={Link}>
            Jobs
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
