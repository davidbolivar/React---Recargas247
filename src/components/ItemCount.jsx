import React, { useEffect, useState } from "react";
import { InputGroup, Form, Button, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ItemCount = ({ stock, initial }) => {
	const onAdd = (qty) => alert("Agregaste una recarga de Bs " + qty + " al carrito.");

	let desactivado = "";
	let texto_boton_agregar = "Agregar al carrito";
	let clase_boton;

	if (stock < 1) {
		desactivado = "disabled";
		initial = 0;
		texto_boton_agregar = "Sin stock";
		clase_boton = "outline-danger";
	}

	const [contador, setContador] = useState(initial);

	return (
		<>
			<Row className="justify-content-center">
				<Col>
					<InputGroup className="mb-3">
						<InputGroup.Text style={{ cursor: "pointer" }} id="basic-addon1" onClick={() => contador > initial && setContador(contador - 1)}>
							-
						</InputGroup.Text>

						<Form.Control size="sm" placeholder={contador} aria-label={contador} className="bg-white" aria-describedby="basic-addon1" style={{ textAlign: "center", fontWeight: "500" }} disabled />

						<InputGroup.Text style={{ cursor: "pointer" }} id="basic-addon1" onClick={() => contador < stock && setContador(contador + 1)}>
							+
						</InputGroup.Text>
					</InputGroup>

					<Button className={`w-100 border-secondary ${desactivado}`} onClick={() => onAdd(contador)} variant={clase_boton || "light"} size="sm">
						{texto_boton_agregar}
					</Button>
				</Col>
			</Row>
		</>
	);
};

export default ItemCount;
