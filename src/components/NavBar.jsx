import React, { useContext } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";
import logo_r247 from "../img/logo.svg";
import { NavLink } from "react-router-dom";
import { cartContext } from "./CartContex";

const NavBar = () => {
	const { cart } = useContext(cartContext);
	const toggleNavBar = () => {
		let toggleButton = document.getElementById("toggle-button");
		toggleButton.click();
	};

	return (
		<Navbar id="navbar" expand="lg" bg="light" variant="light">
			<Container fluid className="px-0">
				<Navbar.Brand>
					<NavLink className="react-link" exact to="/">
						<img src={logo_r247} height="30px" alt="Logo Recargas 24/7" />
					</NavLink>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" id="toggle-button" />

				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto">
						<NavLink onClick={() => toggleNavBar()} activeClassName="active-link" className="react-link nav-link" exact to="/">
							Inicio
						</NavLink>

						<NavDropdown title="Servicios" id="collasible-nav-dropdown">
							<NavDropdown.Item>
								<NavLink onClick={() => toggleNavBar()} activeClassName="active-link" className="react-link" to="/servicios/movistar">
									<div>Movistar</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink onClick={() => toggleNavBar()} activeClassName="active-link" className="react-link" to="/servicios/movistar-tv">
									<div>Movistar TV</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink onClick={() => toggleNavBar()} activeClassName="active-link" className="react-link" to="/servicios/movistar-fijo">
									<div>Movistar Fijo</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink onClick={() => toggleNavBar()} activeClassName="active-link" className="react-link" to="/servicios/movistar-internet">
									<div>Movistar Internet</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Divider />

							<NavDropdown.Item>
								<NavLink onClick={() => toggleNavBar()} activeClassName="active-link" className="react-link" to="/servicios/movilnet">
									<div>Movilnet</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Divider />

							<NavDropdown.Item>
								<NavLink onClick={() => toggleNavBar()} activeClassName="active-link" className="react-link" to="/servicios/digitel">
									<div>Digitel</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink onClick={() => toggleNavBar()} activeClassName="active-link" className="react-link" to="/servicios/digitel-fijo">
									<div>Digitel Fijo</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink onClick={() => toggleNavBar()} activeClassName="active-link" className="react-link" to="/servicios/digitel-internet">
									<div>Digitel Internet</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Divider />

							<NavDropdown.Item>
								<NavLink onClick={() => toggleNavBar()} activeClassName="active-link" className="react-link" to="/servicios/global-link">
									<div>GlobalLink</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Divider />

							<NavDropdown.Item>
								<NavLink onClick={() => toggleNavBar()} activeClassName="active-link" className="react-link" to="/servicios/simple-tv">
									<div>Simple TV</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Divider />

							<NavDropdown.Item>
								<NavLink onClick={() => toggleNavBar()} activeClassName="active-link" className="react-link" to="/servicios/inter-prepago">
									<div>Inter Prepago</div>
								</NavLink>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<NavLink onClick={() => toggleNavBar()} activeClassName="active-link" className="react-link" to="/servicios/inter-postpago">
									<div>Inter Postpago</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Divider />

							<NavDropdown.Item>
								<NavLink onClick={() => toggleNavBar()} activeClassName="active-link" className="react-link" to="/servicios/cantv-residencial">
									<div>Cantv Residencial</div>
								</NavLink>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<NavLink onClick={() => toggleNavBar()} activeClassName="active-link" className="react-link" to="/servicios/cantv-empresarial">
									<div>Cantv Empresarial</div>
								</NavLink>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<NavLink onClick={() => toggleNavBar()} activeClassName="active-link" className="react-link" to="/servicios/cantv-satelital">
									<div>Cantv Satelital</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Divider />

							<NavDropdown.Item>
								<NavLink onClick={() => toggleNavBar()} activeClassName="active-link" className="react-link" exact to="/servicios">
									<div>Todos los servicios</div>
								</NavLink>
							</NavDropdown.Item>
						</NavDropdown>

						{/* FIN DE OPERADORAS */}

						<NavDropdown title="Categorias" id="collasible-nav-dropdown2">
							<NavDropdown.Item>
								<NavLink onClick={() => toggleNavBar()} activeClassName="active-link" className="react-link" to="/categoria/telefonia-movil">
									<div>Telefonía móvil</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink onClick={() => toggleNavBar()} activeClassName="active-link" className="react-link" to="/categoria/telefonia-fija">
									<div>Telefonía fija</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink onClick={() => toggleNavBar()} activeClassName="active-link" className="react-link" to="/categoria/television">
									<div>Television</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink onClick={() => toggleNavBar()} activeClassName="active-link" className="react-link" to="/categoria/internet">
									<div>Internet</div>
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink onClick={() => toggleNavBar()} activeClassName="active-link" className="react-link" to="/categoria/llamadas-internacionales">
									<div>Llamadas internacionales</div>
								</NavLink>
							</NavDropdown.Item>
						</NavDropdown>

						<NavLink onClick={() => toggleNavBar()} activeClassName="active-link" to="/contacto" className="react-link nav-link">
							Contacto
						</NavLink>
					</Nav>

					<Nav>
						<NavLink onClick={() => toggleNavBar()} activeClassName="active-link" to="/carrito-de-compras" className="react-link nav-link">
							{cart.length > 0 && <CartWidget />}
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
export default NavBar;
