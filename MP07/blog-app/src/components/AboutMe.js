import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
 
function AboutMe() {
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col md={4} className="text-center">
          <Image 
            src="../public/foto1.png" // Canvia pel camí correcte
            roundedCircle 
            alt="Perfil"
            fluid 
          />
        </Col>
        <Col md={8}>
          <h2>Sobre Mi</h2>
          <p>
            Hola! Sóc en Biel, el creador d'aquest blog. M'apassiona compartir 
            idees, projectes i pensaments sobre temes com tecnologia, desenvolupament personal i més.
          </p>
          <p>
            Disfruta del blog!
          </p>
        </Col>
      </Row>
    </Container>
  );
}
 
export default AboutMe;