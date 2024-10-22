import React from "react";
import { Button } from "react-bootstrap";

function ButtonCulture({ categoria, onClick }) {
  return (
    <Button variant="primary" onClick={() => onClick(categoria)}>
      Conocer más sobre {categoria}
    </Button>
  );
}

export default ButtonCulture;
