import React, { useContext } from "react";
import { cartContext } from "./CartContex";
import { Button } from "react-bootstrap";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

export function CartItem({ props, item_number }) {
	const { deleteItem } = useContext(cartContext);
	return (
		<tr>
			<td>{item_number + 1}</td>
			<td>{props.display_name}</td>
			<td>{props.category.es}</td>
			<td>{props.contract.es}</td>
			<td>{props.price} Bs</td>
			<td>{props.qty}</td>
			<td>{props.total} Bs</td>
			{/* <td>
				<ItemCount stock={props.stock} initial={props.qty} />
			</td> */}
			<td>
				<Button variant="outline-danger" size="sm" className="w-100" onClick={() => deleteItem(props.service_id)}>
					<i class="bi bi-x-circle"></i> Eliminar
				</Button>
			</td>
		</tr>
	);
}
