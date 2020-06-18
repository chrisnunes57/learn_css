import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from "reactstrap";
import "./Navigation.scss";

function Navigation() {
  return (
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarBrand href="/">cs masterz</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/profile">username</NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
