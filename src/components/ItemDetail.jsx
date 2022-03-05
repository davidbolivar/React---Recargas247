import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";

import { Link } from "react-router-dom";

const ItemDetail = ({ props, onAdd, showCount }) => {
	let outOfStock = false;
	if (props.stock < props.min_amount) outOfStock = true;
	return (
		<>
			<Container className="my-5">
				<Row className="shadow mx-0" xs={1} md={2} style={{ borderLeft: `10px solid ${props.colors.primary}` }}>
					<Col className="mx-auto px-0 vertical-align" style={{ minHeight: "170px" }}>
						<Card.Img variant="top" style={{ maxWidth: "80%", margin: "auto" }} src={props.image} />
					</Col>
					<Col className="px-0">
						<Card className="rounded-0 border-0">
							<Card.Header className="h2 text-light bg-secondary rounded-0">{props.category.es.toUpperCase()}</Card.Header>
							<Card.Body className="pb-0 bg-light">
								<blockquote className="mb-0">
									<Card.Text className="m-0 small">
										<strong className="text-secondary">TIPO DE CONTRATO:</strong> {props.contract.es}
									</Card.Text>

									<Card.Text className="m-0 small">
										<strong className="text-secondary">RECARGA MÍNIMA: </strong> {props.min_amount} Bs
									</Card.Text>

									<Card.Text className="m-0 small">
										<strong className="text-secondary">RECARGA MÁXIMA: </strong> {props.max_amount} Bs
									</Card.Text>

									{props.stock >= props.min_amount ? (
										<Card.Text className="m-0 small">
											<strong className="text-secondary">STOCK: </strong> {props.stock}
										</Card.Text>
									) : (
										<Card.Text className="m-0 small">
											<strong className="text-danger">SIN STOCK</strong>
										</Card.Text>
									)}

									<Card.Text className="mt-2 p-2 small alert alert-success">
										<strong className="text-success">PRECIO: </strong>
										{props.price} Bs.
									</Card.Text>

									{/* Si se cumplen las condiciones renderizamos ItemCount, si no se cumplen, mostramos botón de Ver más servicios */}
									{showCount && !outOfStock && <ItemCount stock={props.stock} initial={props.min_amount} onAdd={onAdd} />}

									{/* Si no hay stock, mostramos botón de Ver más servicios */}
									{outOfStock && (
										<Link to="/">
											<Button className="col-12" variant="outline-danger">
												Ver más servicios
											</Button>
										</Link>
									)}

									{/* Si no se muestra ItemCount, mostramos los botones de ir al carrito o seguir comprando */}
									{!showCount && (
										<Row xs="1" md="2">
											<Col className="mb-2">
												<Link to="/carrito-de-compras">
													<Button className="col-12" variant="primary">
														Continuar al carrito
													</Button>
												</Link>
											</Col>

											<Col className="mb-2">
												<Link to="/">
													<Button className="col-12 text-white" variant="info">
														Seguir comprando
													</Button>
												</Link>
											</Col>
										</Row>
									)}

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
