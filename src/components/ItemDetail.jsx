import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
	return (
		<>
			<Container className="my-5">
				<Row className="border border-secondary shadow-md" sm={1} lg={2}>
					<Col className="mx-auto px-0">
						<Card.Img variant="top" src={item.image} />
						{/* <img src={item.image} /> */}
					</Col>
					<Col className="px-0 border-left">
						<Card className="rounded-0 border-0">
							<Card.Header className="h2 text-secondary">
								{item.name} {item.contract.es}
							</Card.Header>
							<Card.Body className="pb-0">
								<blockquote className="mb-0">
									{/* <Card.Text className="m-0 small border-bottom border-light">
										<strong className="text-secondary">Tipo de contrato:</strong> {item.contract.es}
									</Card.Text> */}
									<Card.Text className="m-0 small border-bottom border-light">
										<strong className="text-secondary">Tipo de servicio:</strong> {item.service.es}
									</Card.Text>
									<Card.Text className="m-0 small border-bottom border-light">
										<strong className="text-secondary">Mínimo / Máximo:</strong> {item.min} Bs. / {item.max}Bs.
									</Card.Text>
									<Card.Text className="mt-0 small border-bottom border-light">
										<strong className="text-secondary">Montos de recarga:</strong> {item.amounts.join(", ")}
									</Card.Text>

									<Container>
										<ItemCount stock={item.stock} initial="1" />
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
