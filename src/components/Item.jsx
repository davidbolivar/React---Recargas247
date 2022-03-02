import React from "react";
import { Card, ListGroup, ListGroupItem, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ props }) => {
	let outOfStock = false;
	if (props.stock < props.min_amount) outOfStock = true;
	return (
		<>
			<Col>
				<Card className="border-0 border-bottom border-end border-start shadow-sm rounded-0 text-center bg-light mx-1">
					<Card.Img variant="top" src={props.image} style={{ height: "50px", maxWidth: "200px" }} className="my-2 mx-auto" alt={`Imagen ${props.display_name.primary}`} />
					<Card.Body className="text-light px-0 py-0" style={{ backgroundColor: `${props.colors.primary}` }}>
						<Card.Title className="my-0 py-1 px-2 small">
							{props.category.es} - {props.contract.es}
						</Card.Title>
					</Card.Body>
					<ListGroup className="list-group-flush border-0">
						<ListGroupItem className="bg-light text-secondary">
							<p className="my-0">
								<b>Mínimo:</b> {props.min_amount} Bs
							</p>
							<p className="my-0">
								<b>Máximo:</b> {props.max_amount} Bs
							</p>
							<p className="my-0">{!outOfStock ? `${props.stock} Disponibles` : <span className="text-danger">SIN STOCK</span>}</p>
						</ListGroupItem>
					</ListGroup>
					<Card.Body>
						<Link to={`/servicios/${props.service_id}`}>
							<Button variant="outline-secondary" size="sm" className="w-100">
								RECARGAR
							</Button>
						</Link>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
};

export default Item;
