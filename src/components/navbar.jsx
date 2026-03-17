import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function AppNavbar() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/auth");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          TaskManager
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-3">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {isLoggedIn && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}
          </Nav>

          {/* Buttons */}
          {!isLoggedIn ? (
            <>
              {/* Single Button Approach */}
              <Button variant="outline-info" onClick={() => navigate("/auth")}>
                Register / Login
              </Button>
            </>
          ) : (
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
