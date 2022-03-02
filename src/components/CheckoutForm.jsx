import React from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const CheckoutForm = ({ handleSubmit, cart, orderStatus }) => {
	return (
		<>
			{cart.length > 0 && !orderStatus.completed && (
				<>
					<main>
						<Cart />
						<section className="container my-4">
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
												<button className="btn btn-sm btn-primary w-100" type="submit" id="buy_checkout_btn">
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
				<main className="container">
					<div className="px-4 py-5 my-5 text-center">
						<i className="bi bi-bag-check-fill text-info display-1"></i>
						<h1 className="display-5 fw-bold">¡Gracias por tu compra!</h1>
						<div className="col-lg-6 mx-auto">
							<p className="lead mb-4">
								El código de confirmación de tu orden es <br />
								<b className="text-info">{orderStatus.id}</b>
							</p>
							<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
								<Link to="/">
									<button type="button" className="btn btn-primary btn-lg px-4 gap-3">
										VOLVER AL INICIO
									</button>
								</Link>
							</div>
						</div>
					</div>
				</main>
			)}

			{orderStatus.error && <div>Ocurrió un error: {orderStatus.error}</div>}
		</>
	);
};

export default CheckoutForm;
