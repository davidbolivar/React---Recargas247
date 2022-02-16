import React, { useContext } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";
import logo_r247 from "../img/logo.svg";
import { NavLink } from "react-router-dom";
import { cartContext } from "./CartContex";

const NavBar = () => {
	const { cart } = useContext(cartContext);

	return (
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
			<Container fluid style={{ padding: "0px 50px" }}>
				<Navbar.Brand>
					<NavLink activeClassName="link-activo" className="react-link" to="/">
						<img src={logo_r247} height="30px" alt="Logo Recargas 24/7" />
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
									<div>Movistar</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/movistar-tv">
									<div>Movistar TV</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/movistar-fijo">
									<div>Movistar Fijo</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/movistar-internet">
									<div>Movistar Internet</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Divider />

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/movilnet">
									<div>Movilnet</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Divider />

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/digitel">
									<div>Digitel</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/digitel-fijo">
									<div>Digitel Fijo</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/digitel-internet">
									<div>Digitel Internet</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Divider />

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/global-link">
									<div>GlobalLink</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Divider />

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/simple-tv">
									<div>Simple TV</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Divider />

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/inter-prepago">
									<div>Inter Prepago</div>
								</NavLink>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/inter-postpago">
									<div>Inter Postpago</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Divider />

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/cantv-residencial">
									<div>Cantv Residencial</div>
								</NavLink>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/cantv-empresarial">
									<div>Cantv Empresarial</div>
								</NavLink>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/servicios/cantv-satelital">
									<div>Cantv Satelital</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Divider />

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" exact to="/">
									<div>Todas las operadoras</div>
								</NavLink>
							</NavDropdown.Item>
						</NavDropdown>

						{/* FIN DE OPERADORAS */}

						<NavDropdown title="Categorias" id="collasible-nav-dropdown2">
							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/categoria/telefonia-movil">
									<div>Telefonía móvil</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/categoria/telefonia-fija">
									<div>Telefonía fija</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/categoria/television">
									<div>Television</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/categoria/internet">
									<div>Internet</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink activeClassName="link-activo" className="react-link" to="/categoria/llamadas-internacionales">
									<div>Llamadas internacionales</div>
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

						<Nav.Link>
							<NavLink activeClassName="link-activo" to="/contacto" className="react-link">
								Contacto
							</NavLink>
						</Nav.Link>

						{/* <Nav.Link>
							<NavLink activeClassName="link-activo" to="/finalizar-compra" className="react-link">
								Checkout
							</NavLink>
						</Nav.Link> */}
					</Nav>

					<Nav>
						<Nav.Link href="#cart">
							<NavLink activeClassName="link-activo" to="/carrito-de-compras" className="react-link">
								{cart.length > 0 && <CartWidget />}
							</NavLink>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
export default NavBar;
