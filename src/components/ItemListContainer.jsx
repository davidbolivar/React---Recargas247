import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

function ItemListContainer() {
	const [producto, setProducto] = useState({});
	const { category } = useParams();

	useEffect(() => {
		const obtenerProductos = new Promise((resolve, reject) => {
			fetch("/api/products.json")
				.then((response) => response.json())
				.then((res) => {
					console.log(res);
					resolve(res);
				});
		});

		obtenerProductos.then((res) => {
			if (category) res = res.filter((item) => item.category.id === category && item.active);
			console.log(obtenerProductos);
			console.log(res);
			setProducto(res);
		});

		obtenerProductos.catch((err) => setProducto(err));
	}, [category]);

	return (
		<>
			{producto.length ? (
				<Container fluid="sm" className="my-4">
					<ItemList items={producto} />
				</Container>
			) : (
				<Loader />
			)}
		</>
	);
}

export default ItemListContainer;
