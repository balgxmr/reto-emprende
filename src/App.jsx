import Categories from "./assets/components/Categories.jsx";
import NavbarDisplay from "./assets/components/Navbar.jsx";
import Banner from "./assets/components/Banner.jsx";
import Descripcion from "./assets/components/Descripcion.jsx";
import TeamSection from "./assets/components/TeamSection.jsx";
import Footer from "./assets/components/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavbarDisplay />
      <Banner texto="Explora las increíbles culturas" imagenUrl="https://mupa.gob.pa/wp-content/uploads/Artesanias-Balboa-Alcaldia-de-Panama-Pueblos-Originarios-Fotos-Jose-Vasquez-8.jpg" />
      <Descripcion
        titulo="¿Cuál es nuestro objetivo?"
        descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nesciunt nisi quasi magni animi iure, assumenda, quibusdam laboriosam illo dolor non explicabo, impedit labore architecto consequatur id provident alias voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nesciunt nisi quasi magni animi iure, assumenda, quibusdam laboriosam illo dolor non explicabo, impedit labore architecto consequatur id provident alias voluptates?"
      />
      <h2 className="textoPreCategorias">Explora las diversas culturas:</h2>
      {/* <Descripcion titulo="Explora las diversas culturas:" /> */}
      <div className="categoriesContainer">
        <Categories />
      </div>
      <TeamSection />
      <Footer />
    </>
  );
}

export default App;
