import React from "react";
import { Card, ListGroup, ListGroupItem, Col } from "react-bootstrap";
import ItemCount from "./ItemCount";

const Item = ({ id, title, price, pictureUrl, stock }) => {
	const onAdd = (qty) => {
		let producto_s;
		qty > 1 ? (producto_s = "productos") : (producto_s = "producto");
		alert("Agregaste " + qty + " " + producto_s + " al carrito.");
	};

	return (
		<>
			<Col>
				<Card className="shadow-sm" key={id} map>
					<Card.Img variant="top" src={pictureUrl} />
					<Card.Body>
						<Card.Title>{title}</Card.Title>
					</Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroupItem>{price} ARS</ListGroupItem>
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
