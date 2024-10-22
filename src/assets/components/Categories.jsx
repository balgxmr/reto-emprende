import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import listaDeProductos from "../const/listaDeProductos.js";
import Product from "./Product.jsx";
import ButtonCulture from "./ButtonCulture.jsx";

function Categories() {
  // Agrupar los productos por categoría
  const productosPorCategoria = listaDeProductos.reduce((acc, producto) => {
    const { categoria } = producto;
    if (!acc[categoria]) {
      acc[categoria] = [];
    }
    // Agregar productos a la categoría y limitar a un máximo de 3
    if (acc[categoria].length < 3) {
      acc[categoria].push(producto);
    }
    return acc;
  }, {});

  return (
    <Container>
      {Object.keys(productosPorCategoria).map((categoria) => (
        <div className="sub-category-container" key={categoria}>
          <h2 className="sub-category-title">{categoria}</h2>
          <Row>
            {productosPorCategoria[categoria].map((producto) => (
              <Col xs={12} sm={6} md={4} key={producto.nombre}>
                <Product imagenUrl={producto.imagenUrl} nombre={producto.nombre} descripcion={producto.descripcion} precio={producto.precio} comunidad={producto.comunidad} categoria={producto.categoria} disponibilidad={producto.disponibilidad} />
              </Col>
            ))}
          </Row>
          <ButtonCulture categoria={categoria} />
        </div>
      ))}
    </Container>
  );
}

export default Categories;
