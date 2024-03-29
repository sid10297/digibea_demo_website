import { Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./index.css";
import logo from "../../assets/images/logo.svg";
import { Strings } from "../../constants";
import ServicesData from "../../screens/ServiceDetail/ServicesData";
import { useEffect, useState } from "react";

const styles = {
  link: {
    textDecoration: "none",
  },
};

const DBNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(document.body.getBoundingClientRect().top > scrollPosition);
      setScrollPosition(document.body.getBoundingClientRect().top);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    // <Navbar collapseOnSelect expand={true}>
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${showNavbar ? "active" : "hidden"}`}
      >
        <Link to="/">
          <Nav.Link href="#home">
            <Navbar.Brand
              style={{
                display: "flex",
                padding: "0.3rem",
                marginTop: "0.3rem",
                color: "var(--brand)",
              }}
            >
              <img className={"navLogo"} src={logo} alt={Strings.appName} />
              <p style={{ marginLeft: "10px", marginTop: "5px" }}>Digibea</p>
            </Navbar.Brand>
          </Nav.Link>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" style={styles.link}>
              <Nav.Link href="#home">HOME</Nav.Link>
            </Link>

            <Link to="/about" style={styles.link}>
              <Nav.Link href="#about">ABOUT</Nav.Link>
            </Link>

            <NavDropdown title="SERVICES" id="collasible-nav-dropdown">
              {ServicesData.map((service) => (
                <Link
                  currentPath="/services"
                  to={`/services/${service.id}`}
                  style={styles.link}
                  key={service.id}
                >
                  <NavDropdown.Item key={service.id} href={service.id}>
                    {service.name}
                  </NavDropdown.Item>
                </Link>
              ))}
            </NavDropdown>

            <Link to="/blogs" style={styles.link}>
              <Nav.Link href="#blogs">BLOGS</Nav.Link>
            </Link>
          </Nav>

          <Link to="/getQuote">
            <Nav.Link href="#getQuote">
              <Button id="contact-form-button" className="btn">
                Get Quote
              </Button>
            </Nav.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default DBNavbar;
