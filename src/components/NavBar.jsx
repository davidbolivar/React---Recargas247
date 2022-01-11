import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";
import logo_r247 from "../img/logo.svg";

function NavBar() {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
				<Container fluid style={{ padding: "0px 50px" }}>
					<Navbar.Brand href="#home">
						<img src={logo_r247} alt="logo" height="30px" alt="Recargas 24/7" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#how">¿Cómo funciona?</Nav.Link>
							<NavDropdown title="Operadoras" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#movistar">Movistar</NavDropdown.Item>
								<NavDropdown.Item href="#movistar_tv">Movistar TV</NavDropdown.Item>
								<NavDropdown.Item href="#movilnet">Movilnet</NavDropdown.Item>
								<NavDropdown.Item href="#digitel">Digitel</NavDropdown.Item>
								<NavDropdown.Item href="#simple_tv">Simple TV</NavDropdown.Item>
								<NavDropdown.Item href="#inter_prepago">Inter Prepago</NavDropdown.Item>
								<NavDropdown.Item href="#inter_postpago">Inter Postpago</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#otras_operadoras">Otras operadoras</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="#faq">Preguntas frecuentes</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href="#cart">
								<CartWidget />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
export default NavBar;
