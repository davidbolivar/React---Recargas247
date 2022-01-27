import React from "react";
import Item from "./Item";
import { Row } from "react-bootstrap";

const ItemList = ({ items }) => {
	return (
		<>
			<Row xs="1" md="2" lg="4" className="g-4">
				{items.map((item) => (
					<Item props={item} />
				))}
			</Row>
		</>
	);
};

export default ItemList;
