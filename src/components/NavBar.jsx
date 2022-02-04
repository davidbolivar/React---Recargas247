import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";
import logo_r247 from "../img/logo.svg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
			<Container fluid style={{ padding: "0px 50px" }}>
				<Navbar.Brand>
					<NavLink activeClassName="link-activo" className="react-link" to="/">
						<img src={logo_r247} alt="logo" height="30px" alt="Recargas 24/7" />
					</NavLink>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />

				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#how">
							<NavLink activeClassName="link-activo" className="react-link" exact to="/">
								Inicio
							</NavLink>
						</Nav.Link>

						<Nav.Link href="#how">
							<NavLink activeClassName="link-activo" className="react-link" to="/como-funciona">
								¿Cómo funciona?
							</NavLink>
						</Nav.Link>

						<NavDropdown title="Servicios" id="collasible-nav-dropdown">
							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/movistar">
									Movistar
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/movistar-tv">
									Movistar TV
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/movistar-fijo">
									Movistar Fijo
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/movistar-internet">
									Movistar Internet
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Divider />

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/movilnet">
									Movilnet
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Divider />

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/digitel">
									Digitel
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/digitel-fijo">
									Digitel Fijo
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/digitel-internet">
									Digitel Internet
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Divider />

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/global-link">
									GlobalLink
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Divider />

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/simple-tv">
									Simple TV
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Divider />

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/inter-prepago">
									Inter Prepago
								</NavLink>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/inter-postpago">
									Inter Postpago
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Divider />

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/cantv-residencial">
									Cantv Residencial
								</NavLink>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/cantv-empresarial">
									Cantv Empresarial
								</NavLink>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/cantv-satelital">
									Cantv Satelital
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Divider />

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" exact to="/">
									Todas las operadoras
								</NavLink>
							</NavDropdown.Item>
						</NavDropdown>

						{/* FIN DE OPERADORAS */}

						<NavDropdown title="Categorias" id="collasible-nav-dropdown2">
							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/categoria/telefonia-movil">
									Telefonía móvil
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/categoria/telefonia-fija">
									Telefonía fija
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/categoria/television">
									Television
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/categoria/internet">
									Internet
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/categoria/llamadas-internacionales">
									Llamadas internacionales
								</NavLink>
							</NavDropdown.Item>

							{/* <NavDropdown.Item>
									<NavLink activeClassName="link-activo" className="react-link" to="/categoria/loteria">
										Lotería
									</NavLink>
								</NavDropdown.Item> */}
						</NavDropdown>

						<Nav.Link>
							<NavLink activeClassName="link-activo" to="/preguntas-frecuentes" className="react-link">
								Preguntas frecuentes
							</NavLink>
						</Nav.Link>
					</Nav>

					<Nav>
						<Nav.Link href="#cart">
							<NavLink activeClassName="link-activo" to="/carrito-de-compras" className="react-link">
								<CartWidget />
							</NavLink>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
export default NavBar;
