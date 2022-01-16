import React, { useState } from "react";
import { InputGroup, FormControl, Button, Container, Col, Row } from "react-bootstrap";

const ItemCount = ({ stock, initial, onAdd }) => {
	let desactivado = "";
	let texto_boton_agregar = "Agregar al carrito";
	if (stock < 1) {
		desactivado = "disabled";
		initial = 0;
		texto_boton_agregar = "Sin stock";
	}

	const [contador, setContador] = useState(+initial);
	return (
		<>
			<Container>
				<Row className="justify-content-center">
					<Col xs="8" md="6" lg="4">
						<InputGroup className="mb-3">
							<InputGroup.Text style={{ cursor: "pointer" }} id="basic-addon1" onClick={() => contador > initial && setContador(contador - 1)}>
								-
							</InputGroup.Text>

							<FormControl placeholder={contador} aria-label={contador} className="bg-white" aria-describedby="basic-addon1" style={{ textAlign: "center", fontWeight: "500" }} disabled />

							<InputGroup.Text style={{ cursor: "pointer" }} id="basic-addon1" onClick={() => contador < stock && setContador(contador + 1)}>
								+
							</InputGroup.Text>
						</InputGroup>

						<Button className={`w-100 border-secondary ${desactivado}`} onClick={() => onAdd(contador)} variant="light">
							{texto_boton_agregar}
						</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default ItemCount;
