import React, { useContext } from "react";
import { cartContext } from "./CartContex";
import { CartItem } from "./CartItem";
import { Container, Table, Button, Row, Col } from "react-bootstrap";

const Cart = () => {
	const { cart, setCart, onAdd } = useContext(cartContext);

	return (
		<>
			<Container fluid="sm" className="pt-5">
				<Table striped bordered hover size="sm">
					<thead>
						<tr>
							<th className="col-1">#</th>
							<th className="col-3">Servicio</th>
							<th className="col-1">Precio</th>
							<th className="col-5">Modificar</th>
							<th className="col-2"></th>
						</tr>
					</thead>
					<tbody>
						{cart.map((item, i) => (
							<CartItem props={item} item_number={i} />
						))}
					</tbody>
				</Table>

				{cart.length > 0 && (
					<Row className="justify-content-md-center">
						<Col xs="10" md="4" lg="3">
							<Button variant="outline-danger" size="sm" className="rounded-0 w-100" onClick={() => setCart([])}>
								Vaciar Carrito
							</Button>
						</Col>
					</Row>
				)}
			</Container>
		</>
	);
};

export default Cart;
