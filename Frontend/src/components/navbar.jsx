import { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";
import "./navbar.css";

export default function AppNavbar() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  /* Scroll Effect for Glassmorphism */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    navigate("/auth");
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`premium-navbar ${scrolled ? "scrolled glass-nav" : ""}`}
    >
      <Container>
        {/* Premium Logo */}
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <div className="logo-icon-wrapper">
            <FaLaptopCode className="logo-icon-svg" />
          </div>
          <span className="logo-text">Task<span className="text-gradient">Flow</span></span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-4 nav-links-premium">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            {isLoggedIn && (
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            )}
          </Nav>

          {/* Auth Actions */}
          <div className="nav-actions-premium">
            {!isLoggedIn ? (
              <>
                <Button variant="link" className="btn-login-premium" onClick={() => navigate("/auth")}>
                  Log in
                </Button>
                <Button className="btn-premium btn-signup-premium" onClick={() => navigate("/auth")}>
                  Get Started
                </Button>
              </>
            ) : (
              <Button className="btn-outline-premium" onClick={handleLogout}>
                Logout
              </Button>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
