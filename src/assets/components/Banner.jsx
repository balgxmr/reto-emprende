import React from "react";

function Banner({ texto, imagenUrl }) {
  return (
    <div className="container-fluid main-section" style={{ backgroundImage: `url(${imagenUrl})` }}>
      <div className="overlay" />
      <h1>{texto}</h1>
    </div>
  );
}

export default Banner;
