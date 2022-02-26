import React from "react";
import Cart from "./Cart";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const CheckoutForm = ({ handleSubmit, cart, orderStatus }) => {
	return (
		<>
			{cart.length > 0 && !orderStatus.completed && (
				<>
					<Cart />
					<main name="checkout" className="container my-4">
						<section>
							<div className="row mt-3">
								<div className="col-12 mt-3">
									<h4 className="mb-3 text-primary border-bottom">Finalizar compra</h4>
									<form className="needs-validation" id="checkout-form" onSubmit={handleSubmit}>
										<div className="row g-2">
											<div className="col-sm-6">
												<label htmlFor="first_name" className="form-label">
													Nombre
												</label>
												<input type="text" className="form-control form-control-sm" name="first_name" id="first_name" placeholder="Ingresa tu nombre" required />
											</div>

											<div className="col-sm-6">
												<label htmlFor="last_name" className="form-label">
													Apellido
												</label>
												<input type="text" className="form-control form-control-sm" name="last_name" id="last_name" placeholder="Ingresa tu apellido" required />
											</div>

											<div className="col-sm-6">
												<label htmlFor="email" className="form-label">
													Correo
												</label>
												<input type="email" className="form-control form-control-sm" name="email" id="email" placeholder="Ingresa tu correo electrónico" required />
											</div>

											<div className="col-sm-6">
												<label htmlFor="phone" className="form-label">
													Teléfono
												</label>
												<input type="tel" className="form-control form-control-sm" name="phone" id="phone" placeholder="Ingresa tu teléfono" required />
											</div>

											<div className="col-md-6 mt-3">
												<div className="form-check">
													<input type="checkbox" className="form-check-input" name="save_info" id="save_info" value="true" />
													<label className="form-check-label text-primary" htmlFor="save-info">
														Guardar mi información para próximas compras
													</label>
												</div>
											</div>

											<div className="col-md-6 mt-3">
												<button className="btn btn-sm btn-primary w-100" type="submit">
													COMPRAR
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</section>
					</main>
				</>
			)}

			{orderStatus.completed && (
				<>
					<div className="alert alert-success text-center h4 rounded-0 border-0">El identíficador de tu orden es {orderStatus.id}</div>
					<div className="text-center">
						<NavLink activeClassName="link-activo" to="/">
							<Button variant="alert alert-secondary" size="sm" className="col-6 my-4">
								IR AL INICIO
							</Button>
						</NavLink>
					</div>
				</>
			)}

			{orderStatus.error && <div>Ocurrió un error: {orderStatus.error}</div>}
		</>
	);
};

export default CheckoutForm;
