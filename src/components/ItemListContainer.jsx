import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { Container } from "react-bootstrap";

function ItemListContainer() {
	const [producto, setProducto] = useState([]);

	useEffect(() => {
		// const productos = [
		// 	{
		// 		id: 1,
		// 		title: "Producto 1",
		// 		price: "100",
		// 		pictureUrl: "https://mexx-img-2019.s3.amazonaws.com/40428_1.jpeg",
		// 		stock: 0,
		// 	},
		// 	{
		// 		id: 2,
		// 		title: "Producto 2",
		// 		price: "200",
		// 		pictureUrl: "https://mexx-img-2019.s3.amazonaws.com/40428_1.jpeg",
		// 		stock: 4,
		// 	},
		// 	{
		// 		id: 3,
		// 		title: "Producto 3",
		// 		price: "300",
		// 		pictureUrl: "https://mexx-img-2019.s3.amazonaws.com/40428_1.jpeg",
		// 		stock: 5,
		// 	},
		// 	{
		// 		id: 4,
		// 		title: "Producto 4",
		// 		price: "400",
		// 		pictureUrl: "https://mexx-img-2019.s3.amazonaws.com/40428_1.jpeg",
		// 		stock: 10,
		// 	},
		// ];

		const obtenerProductos = new Promise((resolve, reject) => {
			// setTimeout(() => {
			// 	console.log(productos);
			// 	resolve(productos);
			// }, 3000);

			fetch("./api/products.json")
				.then((response) => response.json())
				.then((res) => {
					console.log(res);
					resolve(res);
				});
		});

		obtenerProductos.then((res) => {
			console.log(obtenerProductos);
			console.log(res);
			setProducto(res);
		});

		obtenerProductos.catch((err) => setProducto(err));
	}, []);

	return (
		<>
			<Container fluid="sm" className="my-4">
				<ItemList items={producto} />
			</Container>
		</>
	);
}

export default ItemListContainer;
