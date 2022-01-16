import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = () => {
	const onAdd = (qty) => {
		let producto_s;
		qty > 1 ? (producto_s = "productos") : (producto_s = "producto");
		alert("Agregaste " + qty + " " + producto_s + " al carrito.");
	};

	return <ItemCount stock="5" initial="1" onAdd={onAdd} />;
};

export default ItemListContainer;
