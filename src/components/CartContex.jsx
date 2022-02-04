import React, { createContext, useEffect, useState } from "react";

export const cartContext = createContext();

export function CartProvider({ children }) {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		console.log("UseEffect", cart);
	}, [cart]);

	const addToCart = (product, qty) => {
		let index = isInCart(product.service_id);

		if (index >= 0) {
			cart[index].qty = cart[index].qty + qty;
			setCart([...cart]);
		} else setCart([...cart, { service_id: product.service_id, display_name: product.display_name.primary, qty }]);
	};

	const isInCart = (service_id) => cart.findIndex((item) => item.service_id === service_id);

	const deleteItem = (service_id) => {
		const newCart = cart.filter((item) => item.service_id !== service_id);
		setCart(newCart);
	};

	return <cartContext.Provider value={{ cart, addToCart, deleteItem, setCart }}>{children}</cartContext.Provider>;
}
