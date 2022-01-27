import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
	const [carrito, setCarrito] = useState(["Producto1", "Producto2"]);

	return <CartContext.Provider value={{ carrito, setCarrito }}>{children};</CartContext.Provider>;
}
