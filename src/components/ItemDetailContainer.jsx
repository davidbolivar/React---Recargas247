import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {
	const [itemDetail, setItemDetail] = useState({});
	const [loading, setLoading] = useState(true);
	const { service_id } = useParams();
	let ready = false;

	const getItem = new Promise((resolve, reject) => {
		fetch("/api/products.json")
			.then((response) => response.json())
			.then((res) => {
				console.log(res);
				resolve(res);
			});
	});

	useEffect(() => {
		setLoading(true);
		getItem
			.then((res) => {
				console.log(res);
				console.log(getItem);

				// Se realiza un find para obtener solo 1 item y guardarlo en el estado itemDetail;
				let details = res.find((item) => item.service_id === service_id && item.active);
				details ? setItemDetail([details]) : setItemDetail([]);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setItemDetail(err);
			});
	}, [service_id]);

	return (
		<>
			{!loading ? (
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
