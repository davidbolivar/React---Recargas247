import React, { useContext } from "react";
import { cartContext } from "./CartContex";

export function CartItem({ props }) {
	const { deleteItem } = useContext(cartContext);
	return (
		<div className="d-flex justify-content-between align-items-end mb-1 p-2 border-bottom border-end bg-light" style={{ borderLeft: `5px solid ${props.color}` }}>
			<div className="d-flex flex-row">
				<span className="font-weight-bold d-block">
					<strong>{props.qty}x </strong>
					<span>
						{props.display_name.primary} - {props.category.es}
					</span>
				</span>
			</div>

			<div className="d-flex flex-row align-items-end">
				<span className="d-block ms-5">Bs {props.total} </span>
				<i className="bi bi-x-circle-fill text-danger ms-2" style={{ cursor: "pointer" }} onClick={() => deleteItem(props.service_id)}></i>
			</div>
		</div>
	);
}
