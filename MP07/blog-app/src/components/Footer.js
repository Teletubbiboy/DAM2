import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" className="mt-5 fixed-bottom">
      <Container className="justify-content-between">
        <span className="text-light">©️ 2024 Blog Personal</span>
        <Nav>
          <Nav.Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Nav.Link>
          <Nav.Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;