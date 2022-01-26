import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
	const [itemDetail, setItemDetail] = useState([]);

	useEffect(() => {
		const getItem = new Promise((resolve, reject) => {
			fetch("../api/products.json")
				.then((response) => response.json())
				.then((res) => {
					console.log(res);
					resolve(res);
				});
		});

		getItem
			.then((res) => {
				console.log(res);
				// Se realiza un find para obtener solo 1 item y guardarlo en el estado itemDetail;
				let detalle = res.find((item) => item.name === "Movistar");
				setItemDetail([detalle]);
			})
			.catch((err) => {
				console.error(err);
				setItemDetail(err);
			});
	}, []);

	return (
		<>
			{itemDetail.map((item) => {
				return <ItemDetail item={item} />;
			})}
		</>
	);
};

export default ItemDetailContainer;
