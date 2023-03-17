import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Note Zipper</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <nav className="m-auto">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </nav>
          <Nav style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="/mynotes">
              <Link to="/mynotes"></Link>
              My notes
            </Nav.Link>
            {/* <Nav.Link href="#action2">Akash Drolia</Nav.Link> */}
            <NavDropdown title="Akash Drolia" id="navbarScrollingDropdown">
              {/* <NavDropdown.Item href="#action3">action</NavDropdown.Item> */}
              <NavDropdown.Item href="#action4">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Log out</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
