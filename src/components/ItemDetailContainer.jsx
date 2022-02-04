import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { cartContext } from "./CartContex";

const ItemDetailContainer = () => {
	const { addToCart } = useContext(cartContext);

	const { service_id } = useParams();

	const [itemDetail, setItemDetail] = useState({});
	const [loading, setLoading] = useState(true);
	const [showCount, setShowCount] = useState(true);

	const getItem = new Promise((resolve, reject) => {
		fetch("/api/products.json")
			.then((response) => response.json())
			.then((res) => {
				// console.log(res);
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
				details ? setItemDetail(details) : setItemDetail({});
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setItemDetail(err);
			});

		// Cambia el estado para que se renderize
		return setShowCount(true);
	}, [service_id]);

	const onAdd = (qty) => {
		alert(`Agregaste una recarga ${itemDetail.display_name.primary} de Bs ${qty} al carrito.`);
		setShowCount(false);
		addToCart(itemDetail, qty);
	};

	return <>{!loading ? <ItemDetail props={itemDetail} onAdd={onAdd} showCount={showCount} /> : <Loader />}</>;
};

export default ItemDetailContainer;
