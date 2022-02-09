import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { cartContext } from "./CartContex";
import { getFirestore } from "../firebase_config";

const ItemDetailContainer = () => {
	const { addToCart } = useContext(cartContext);

	const { service_id } = useParams();

	const [itemDetail, setItemDetail] = useState({});
	const [loading, setLoading] = useState(true);
	const [showCount, setShowCount] = useState(true);

	useEffect(() => {
		setLoading(true);
		console.log(service_id);
		const db = getFirestore();
		let serviceRef = db.collection("services").doc(service_id);

		serviceRef
			.get()
			.then((doc) => {
				if (!doc.exists) {
					console.error("No existe el servicio");
					setItemDetail({});
					return;
				}

				setItemDetail(doc.data());
				setLoading(false);
			})
			.catch((err) => {
				setItemDetail(err);
				console.error("Error al buscar el servicio");
			});

		return setShowCount(true);
	}, [service_id]);

	const onAdd = (qty) => {
		setShowCount(false);
		addToCart(itemDetail, qty);
	};

	return <>{!loading ? <ItemDetail props={itemDetail} onAdd={onAdd} showCount={showCount} /> : <Loader />}</>;
};

export default ItemDetailContainer;
