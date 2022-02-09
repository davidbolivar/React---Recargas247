import React, { useContext } from "react";
import { cartContext } from "./CartContex";
import { CartItem } from "./CartItem";
import { Container, Table, Button, Row, Col, Alert } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Cart = () => {
	const { cart, clearCart, totalCart } = useContext(cartContext);
	console.log("total:", totalCart());

	const obj = {
		buyer: {
			name: "David Bolívar",
			phone: "+5491112345698",
			email: "davidbolivarh@gmail.com",
		},
		items: cart,
		total: totalCart(),
	};

	console.log(obj);

	return (
		<>
			{cart.length ? (
				<Container fluid="sm" className="pt-5">
					<Table striped bordered hover size="sm">
						<thead>
							<tr>
								<th className="col-1">#</th>
								<th className="col-2">SERVICIO</th>
								<th className="col-2">CATEGORIA</th>
								<th className="col-2">CONTRATO</th>
								<th className="col-1">PRECIO</th>
								<th className="col-1">CANTIDAD</th>
								<th className="col-1">TOTAL</th>
								<th className="col-2"></th>
							</tr>
						</thead>
						<tbody>
							{cart.map((item, i) => (
								<CartItem props={item} item_number={i} />
							))}
						</tbody>
					</Table>

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
								<NavLink activeClassName="link-activo" to="/checkout">
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
