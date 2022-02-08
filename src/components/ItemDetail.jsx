import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";

import { Link } from "react-router-dom";

const ItemDetail = ({ props, onAdd, showCount }) => {
	return (
		<>
			<Container className="my-5">
				<Row className="shadow" xs={1} md={2} style={{ borderLeft: `10px solid ${props.colors.primary}` }}>
					<Col className="mx-auto px-0 align-v" style={{ minHeight: "170px" }}>
						<Card.Img variant="top" style={{ maxWidth: "80%", margin: "auto" }} src={props.image} />
					</Col>
					<Col className="px-0">
						<Card className="rounded-0 border-0">
							<Card.Header className="h2 text-light bg-secondary rounded-0">
								{props.display_name.secondary.toUpperCase()} - {props.category.es.toUpperCase()}
							</Card.Header>
							<Card.Body className="pb-0 bg-light">
								<blockquote className="mb-0">
									<Card.Text className="m-0 small border-bottom border-light">
										<strong className="text-secondary">Tipo de servicio:</strong> {props.contract.es}
									</Card.Text>

									<Card.Text className="m-0 small border-bottom border-light">
										<strong className="text-secondary">Precio mínimo / máximo:</strong> {props.min_amount} Bs. / {props.max_amount} Bs.
									</Card.Text>

									<Card.Text className="m-0 small border-bottom border-light">
										<strong className="text-secondary">Montos de recarga:</strong> {props.amounts.join(", ")}
									</Card.Text>
									<Card.Text className="mt-0 small border-bottom border-light">
										<strong className="text-success">PRECIO: </strong>
										{props.price} Bs.
									</Card.Text>

									<Container>
										{showCount ? (
											<ItemCount stock={props.stock} initial={props.min_amount} onAdd={onAdd} />
										) : (
											<Link to="/carrito-de-compras">
												<Button className={`w-100`} variant="outline-primary">
													Continuar al carrito
												</Button>
											</Link>
										)}
									</Container>

									<footer className="blockquote-footer mt-3">El tiempo de acreditación es de 10 minutos como máximo.</footer>
								</blockquote>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default ItemDetail;
