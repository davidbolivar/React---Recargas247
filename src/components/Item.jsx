import React from "react";
import { Card, ListGroup, ListGroupItem, Col } from "react-bootstrap";
import ItemCount from "./ItemCount";

const Item = ({ name, min, image, stock }) => {
	const onAdd = (qty) => {
		let producto_s;
		qty > 1 ? (producto_s = "productos") : (producto_s = "producto");
		alert("Agregaste " + qty + " " + producto_s + " al carrito.");
	};

	return (
		<>
			<Col>
				<Card className="shadow-sm">
					<Card.Img variant="top" src={image} style={{ height: "50px", maxWidth: "200px" }} className="mt-3 mx-auto" />
					<Card.Body>
						<Card.Title>{name}</Card.Title>
					</Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroupItem>Desde {min} Bs</ListGroupItem>
						<ListGroupItem>{stock} Disponibles</ListGroupItem>
					</ListGroup>
					<Card.Body>
						<ItemCount stock={stock} initial="1" onAdd={onAdd} />
					</Card.Body>
				</Card>
			</Col>
		</>
	);
};

export default Item;
