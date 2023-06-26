"use client";
import styles from "./navegacion.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, animateScroll as scroll } from "react-scroll";

const paginas = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Beneficios",
    path: "beneficios",
  },
  {
    id: 3,
    name: "Nuestros Servicios",
    path: "servicios",
  },
  {
    id: 4,
    name: "Ofertas",
    path: "ofertas",
  },
  {
    id: 5,
    name: "Contacto",
    path: "#contacto",
  },
];

function ColorSchemesExample() {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className={styles.navbar1}>
            <Nav className={styles.navbar} id="basic-navbar-nav">
              {paginas.map((el) => (
                <Nav key={el.id}>
                  <Link
                    to={el.path}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={styles.linkk}
                    href={el.path}
                  >
                    {el.name}
                  </Link>
                </Nav>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
