import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Descripcion(props) {
  return (
    <Container className="descripcion-container">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <h2>{props.titulo}</h2>
          <p>{props.descripcion}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Descripcion;
