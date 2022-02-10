import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { getFirestore } from "../firebase_config";

function ItemListContainer() {
	const [producto, setProducto] = useState({});
	const { category } = useParams();

	useEffect(() => {
		const db = getFirestore();

		// var query = db.collection('chatDocs').where("chatMembers", "array-contains", { userId: "xyz", userName: "abc" });
		let servicesCollection;
		if (!category) servicesCollection = db.collection("services").orderBy("id", "asc");
		else servicesCollection = db.collection("services").where("category.id", "==", category);

		servicesCollection
			.get()
			.then((querySnapshot) => {
				querySnapshot.size === 0 && console.log("No hay servicios");
				setProducto(
					querySnapshot.docs.map((doc) => {
						return { doc_id: doc.id, ...doc.data() };
					})
				);
			})
			.catch((err) => {
				console.error("Error al buscar servicios", err);
			})
			.finally(() => {});
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
