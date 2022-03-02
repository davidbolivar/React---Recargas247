import React, { useState, useContext, useEffect } from "react";
import { cartContext } from "./CartContex";
import { getFirestore, getFirebaseTimeStamp } from "../firebase_config";
import CheckoutForm from "./CheckoutForm";
import firebase from "firebase/app";
import { btnLoading } from "../utilities";

const Checkout = () => {
	const { cart, totalCart, clearCart } = useContext(cartContext);
	const [orderStatus, setOrderStatus] = useState({ completed: false });

	useEffect(() => {
		orderStatus.completed && clearCart();
	}, [orderStatus]);

	const formDataToJson = (form) => {
		const data = {};
		for (let key of form.keys()) {
			data[key] = form.get(key);
		}
		return data;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		btnLoading("buy_checkout_btn", "Procesando...");
		const db = getFirestore();
		const ordersRef = db.collection("orders");
		const serverTimeStamp = getFirebaseTimeStamp;

		const itemsInCart = db.collection("services").where(
			firebase.firestore.FieldPath.documentId(),
			"in",
			cart.map((i) => i.service_id)
		);

		const batch = db.batch();
		const outOfStock = [];
		const itemsToUpdate = await itemsInCart.get();

		itemsToUpdate.docs.forEach((docSnapshot, i) => {
			if (docSnapshot.data().stock >= cart[i].qty) {
				batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - cart[i].qty });
			} else outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
		});

		if (!outOfStock.length) {
			await batch.commit().then(() => {
				// Convierte la data de formulario en un objeto utilizando FormData()
				const formData = formDataToJson(new FormData(event.target));

				// Creo el objeto que se envía a firebase
				const data = { ...formData, items: { ...cart }, total: totalCart(), serverTimeStamp };

				ordersRef
					.add(data)
					.then(({ id }) => {
						// Setea el estatus de la orden como COMPLETO
						setOrderStatus({ completed: true, id: id, error: null });
						event.target.reset();
					})
					.catch((err) => {
						// Setea el estatus de la orden como INCOMPLETO
						setOrderStatus({ completed: false, id: null, error: err });
						console.error(err);
					});
			});
		}
	};

	return <CheckoutForm handleSubmit={handleSubmit} cart={cart} orderStatus={orderStatus} />;
};

export default Checkout;
