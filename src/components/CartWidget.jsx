import React, { useContext, useEffect } from "react";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { cartContext } from "./CartContex";

const CartWidget = () => {
	const { cart } = useContext(cartContext);

	return <span className="bi bi-cart-fill"> ({cart.length}) Ver carrito </span>;
};

export default CartWidget;
