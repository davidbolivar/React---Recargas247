import React from "react";
import Item from "./Item";
import { Row } from "react-bootstrap";

const ItemList = ({ items }) => {
	return (
		<>
			<Row xs="1" md="2" lg="4" className="g-4">
				{items.map((item) => (
					<Item name={item.name} min={item.min} image={item.image} stock={item.stock} />
				))}
			</Row>
		</>
	);
};

export default ItemList;
