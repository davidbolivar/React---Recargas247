import React, { useContext } from "react";
import { cartContext } from "./CartContex";
import { CartItem } from "./CartItem";
import { Container, Button, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
	const { cart, clearCart, totalCart } = useContext(cartContext);
	const pathname = window.location.pathname;

	return (
		<>
			{cart.length ? (
				<Container fluid="sm" className="pt-5" style={{ minHeight: pathname === "/carrito-de-compras" ? "78vh" : "" }}>
					<div name="cart" className="container my-4">
						<section>
							<div className="col-12">
								<div className="me-2">
									<div className="">
										<i className="fa fa-long-arrow-left"></i>
										<h4 className="mb-3 text-primary border-bottom">Carrito de compras</h4>
									</div>

									{cart.map((item, i) => (
										<CartItem key={i} props={item} />
									))}
								</div>
							</div>
						</section>
					</div>

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
									<i className="bi bi-trash"></i> Vaciar Carrito
								</Button>
							</Col>
							<Col xs="6" md="3" lg="2">
								<Link to="/">
									<Button variant="alert alert-success" size="sm" className="w-100 my-1">
										<i className="bi bi-arrow-up-right-circle"></i> Seguir comprando
									</Button>
								</Link>
							</Col>
							<Col xs="12" md="3" lg="2">
								<Link to="/finalizar-compra">
									<Button variant="success" size="sm" className="w-100 my-1">
										<i className="bi bi-check-circle"></i> Finalizar compra
									</Button>
								</Link>
							</Col>
						</Row>
					)}
				</Container>
			) : (
				<main className="container">
					<div className="px-4 py-5 my-5 text-center">
						<i className="bi bi-cart-x-fill text-secondary display-1"></i>
						<h2 className="mt-4 text-secondary">No hay productos en el carrito</h2>
						<Link to="/">
							<button type="button" className="btn btn-primary mt-4">
								VOLVER AL INCIO
							</button>
						</Link>
					</div>
				</main>
			)}
		</>
	);
};

export default Cart;
