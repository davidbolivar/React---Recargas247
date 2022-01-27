import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {
	const [itemDetail, setItemDetail] = useState({});
	const { service_id } = useParams();

	useEffect(() => {
		const getItem = new Promise((resolve, reject) => {
			fetch("/api/products.json")
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
				let details = res.find((item) => item.service_id === service_id && item.active);
				details ? setItemDetail([details]) : setItemDetail([]);
			})
			.catch((err) => {
				console.error(err);
				setItemDetail(err);
			});
	}, [service_id]);

	return (
		<>
			{itemDetail.length ? (
				itemDetail.map((item) => {
					return <ItemDetail props={item} />;
				})
			) : (
				<Loader />
			)}
		</>
	);
};

export default ItemDetailContainer;
