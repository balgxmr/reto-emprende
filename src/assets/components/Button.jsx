import React from "react";
import { Button } from "react-bootstrap";

function CustomButton({ texto, onClick }) {
  return (
    <Button variant="primary" onClick={onClick}>
      {texto}
    </Button>
  );
}

export default CustomButton;
