import React, { useContext } from "react";
import { cartContext } from "./CartContex";
import { CartItem } from "./CartItem";
import { Container, Button, Row, Col, Alert } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Cart = () => {
	const { cart, clearCart, totalCart } = useContext(cartContext);

	return (
		<>
			{cart.length ? (
				<Container fluid="sm" className="pt-5">
					<main name="cart" className="container my-4">
						<section>
							<div className="col-12">
								<div className="me-2">
									<div className="">
										<i className="fa fa-long-arrow-left"></i>
										<h4 className="mb-3 text-primary border-bottom">Carrito de compras</h4>

										{/* <h2 className="lead"> 47 productos en el carrito</h2> */}
									</div>

									{cart.map((item, i) => (
										<CartItem props={item} />
									))}
								</div>
							</div>
						</section>
					</main>

					<Alert variant="light" className="d-flex justify-content-end border-bottom">
						<span className="me-1">
							<strong>TOTAL DE SU COMPRA: </strong>
						</span>
						{totalCart()} Bs.
					</Alert>

					{cart.length > 0 && (
						<Row className="justify-content-md-end justify-content-xs-center">
							<Col xs="6" md="3" lg="2">
								<Button variant="outline-secondary" size="sm" className="w-100 my-1" onClick={() => clearCart()}>
									<i class="bi bi-trash"></i> Vaciar Carrito
								</Button>
							</Col>
							<Col xs="6" md="3" lg="2">
								<NavLink activeClassName="link-activo" to="/">
									<Button variant="alert alert-success" size="sm" className="w-100 my-1">
										<i class="bi bi-arrow-up-right-circle"></i> Seguir comprando
									</Button>
								</NavLink>
							</Col>
							<Col xs="12" md="3" lg="2">
								<NavLink activeClassName="link-activo" to="/finalizar-compra">
									<Button variant="success" size="sm" className="w-100 my-1">
										<i class="bi bi-check-circle"></i> Finalizar compra
									</Button>
								</NavLink>
							</Col>
						</Row>
					)}
				</Container>
			) : (
				<Row className="justify-content-center mt-5">
					<Col xs="10" md="4" lg="3">
						<p className="text-center"> No hay productos en el carrito</p>
						<NavLink activeClassName="link-activo" className="react-link" to="/">
							<Button variant="outline-danger" size="sm" className="w-100">
								<i class="bi bi-house-door"></i> Volver al inicio
							</Button>
						</NavLink>
					</Col>
				</Row>
			)}
		</>
	);
};

export default Cart;
