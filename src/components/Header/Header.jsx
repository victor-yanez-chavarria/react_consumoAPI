import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Buscador from "../Buscador/Buscador";
import Ordenador from "../Ordenador/Ordenador";
import "./Header.css";

const Header = ({ setBusqueda, setOrdenar }) => {
  return (
    <div id="idDescripcion">
      <Row>
        <Col>
          <h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-film"
              viewBox="0 0 16 16"
            >
              <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
            </svg>
            CineMundo
          </h2>
        </Col>
      </Row>
      <Row>
        <Col id="textoCabecera">
          Explora nuestra amplia selección de películas de todos los géneros, <br></br>desde emocionantes películas de acción hasta conmovedoras historias de amor y cautivadores dramas.
        </Col>
      </Row>
      <Row id="inputCabecera">
        <Col>
          <Buscador setBusqueda={setBusqueda} />
        </Col>
        <Col>
          <Ordenador setOrdenar={setOrdenar} />
        </Col>
      </Row>
    </div>
  );
};

export default Header;
