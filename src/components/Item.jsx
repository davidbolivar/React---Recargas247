import React from "react";
import { Card, ListGroup, ListGroupItem, Col, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = ({ props }) => {
	return (
		<>
			<Col>
				<Card className="shadow-sm rounded-0">
					<Card.Img variant="top" src={props.image} style={{ height: "50px", maxWidth: "200px" }} className="my-2 mx-auto" />
					<Card.Body className="text-light bg-secondary px-0 py-0">
						<Card.Title className="my-0 py-1 px-2 text-center lead h2">{props.category.es}</Card.Title>
					</Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroupItem>Recarga mínima: {props.min_amount} Bs</ListGroupItem>
						<ListGroupItem>{props.stock} Disponibles</ListGroupItem>
					</ListGroup>
					<Card.Body>
						<ItemCount stock={props.stock} initial={props.min_amount} />
						<Link to={`/servicios/${props.service_id}`}>
							<Button variant="secondary" size="sm" className="w-100 mt-2">
								COMPRAR
							</Button>
						</Link>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
};

export default Item;
