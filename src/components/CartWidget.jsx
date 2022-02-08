import React, { useContext } from "react";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { cartContext } from "./CartContex";

const CartWidget = () => {
	const { totalItems } = useContext(cartContext);

	return <span className="bi bi-cart-fill"> ({totalItems()}) Ver carrito </span>;
};

export default CartWidget;
