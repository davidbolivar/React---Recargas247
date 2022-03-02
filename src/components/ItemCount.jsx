import React, { useState } from "react";
import { InputGroup, Form, Button, Col, Row } from "react-bootstrap";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

const ItemCount = ({ stock, initial, onAdd }) => {
	const [counter, setCounter] = useState(initial);

	return (
		<Row className="justify-content-center">
			<Col xs="12" sm="6">
				<InputGroup className="mb-3">
					<InputGroup.Text style={{ cursor: "pointer" }} onClick={() => counter > initial && setCounter(counter - initial)}>
						-
					</InputGroup.Text>

					<Form.Control size="sm" value={counter} aria-label={counter} className="bg-white" style={{ textAlign: "center", fontWeight: "500" }} disabled />

					<InputGroup.Text style={{ cursor: "pointer" }} onClick={() => counter < stock && counter + initial <= stock && setCounter(counter + initial)}>
						+
					</InputGroup.Text>
				</InputGroup>
			</Col>
			<Col xs="12" sm="6">
				<Button className="w-100 border-secondary" onClick={() => onAdd(counter)} variant="light">
					<i className="bi bi-plus-circle"></i> Agregar al carrito
				</Button>
			</Col>
		</Row>
	);
};

export default ItemCount;
