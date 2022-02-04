import React, { useContext } from "react";
import { cartContext } from "./CartContex";
import { Button } from "react-bootstrap";
import ItemCount from "./ItemCount";

export function CartItem({ props, item_number }) {
	const { deleteItem } = useContext(cartContext);
	return (
		<tr>
			<td>{item_number + 1}</td>
			<td>{props.display_name}</td>
			<td>
				{props.category.es} / {props.contract.es}
			</td>
			<td>{props.qty}</td>
			{/* <td>
				<ItemCount stock={props.stock} initial={props.qty} />
			</td> */}
			<td>
				<Button variant="outline-danger" size="sm" className="rounded-0 w-100" onClick={() => deleteItem(props.service_id)}>
					Eliminar
				</Button>
			</td>
		</tr>
	);
}
