import React, { createContext, useState } from "react";

export const cartContext = createContext();

export function CartProvider({ children }) {
	const [cart, setCart] = useState([]);

	const addToCart = (product, qty) => {
		let index = isInCart(product.service_id);

		if (index >= 0) {
			// Actualiza cantidad cuando el producto ya se encontraba en el carrito
			cart[index].qty = cart[index].qty + qty;
			// Actualiza total cuando el producto ya se encontraba en el carrito
			cart[index].total = cart[index].qty * cart[index].price;
			// Setea el carrito con los cambios
			setCart([...cart]);
		} else setCart([...cart, { service_id: product.service_id, display_name: product.display_name, qty, contract: product.contract, category: product.category, price: product.price, total: qty * product.price }]);
	};

	const clearCart = () => setCart([]);

	const isInCart = (service_id) => cart.findIndex((item) => item.service_id === service_id);

	const deleteItem = (service_id) => {
		const newCart = cart.filter((item) => item.service_id !== service_id);
		setCart(newCart);
	};

	const totalCart = () => cart.reduce((acc, nuevo_valor) => acc + nuevo_valor.total, 0);
	const totalItems = () => cart.reduce((acc, nuevo_valor) => acc + nuevo_valor.qty, 0);

	return <cartContext.Provider value={{ cart, addToCart, deleteItem, setCart, clearCart, totalCart, totalItems }}>{children}</cartContext.Provider>;
}
