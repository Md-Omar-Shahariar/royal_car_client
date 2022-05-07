import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "../../Shared/CustomLink";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="/home">React-Bootstrap</Navbar.Brand>
        <div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={CustomLink} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={CustomLink} to="/myItem">
                My Item
              </Nav.Link>
              <Nav.Link as={CustomLink} to="/inventory">
                Inventory
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
