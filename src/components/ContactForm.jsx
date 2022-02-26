import React from "react";

const ContactForm = ({ handleSubmit, contactStatus }) => {
	return (
		<>
			<main id="contacto" className="container mt-5">
				<section>
					<div className="row row-cols-1 row-cols-lg-2">
						<div className="col">
							<h2>MEDIOS DE CONTACTO</h2>
							<p>
								Nuestro principal canal de atención es{" "}
								<a href="https://wa.me/584120663036?text=¡Hola! Escribo desde la sección de contacto de su página web." target="_blank" rel="noopener noreferrer">
									Whatsapp (+584120663036)
								</a>
								.
							</p>

							<h3>Formulario de contacto</h3>

							<form onSubmit={handleSubmit}>
								<label className="form-label" htmlFor="name">
									Nombre y apellido
								</label>
								<input className="form-control" type="text" name="name" placeholder="Ingresa tu nombre y apellido" required />

								<label className="form-label" htmlFor="phone">
									Teléfono
								</label>
								<input className="form-control" type="tel" name="phone" placeholder="Ingresa tu teléfono" required />

								<label className="form-label" htmlFor="email">
									Correo electrónico
								</label>
								<input className="form-control" type="email" name="email" placeholder="Ingresa tu correo electrónico" required />

								<label className="form-label" htmlFor="referer">
									¿Cómo nos conoció?
								</label>
								<select className="form-select" name="referer" required>
									<option value="" hidden>
										Seleccione
									</option>
									<option value="redes">Redes sociales</option>
									<option value="google">Búsqueda en Google</option>
									<option value="mail">Recibí un correo electrónico</option>
									<option value="recomendacion">Por recomendación</option>
									<option value="otro">Otro (Aclare en los comentarios)</option>
								</select>

								<label className="form-label" htmlFor="comments">
									Preguntas o comentarios
								</label>
								<textarea className="form-control" name="comments" rows="4" cols="50"></textarea>

								<div className="mt-2">
									<input type="reset" className="btn btn-outline-secondary me-2" value="Limpiar formulario" />
									<input type="submit" className="btn btn-secondary" value="Enviar" />
								</div>
							</form>
						</div>
						<div className="col px-0 my-sm-5 my-lg-0">
							<iframe title="mapa de ubicación" className="w-100 h-100" style={{ minHeight: "400px" }} src="https://maps.google.com/maps?hl=es&q=venezuela&t=&z=6&ie=UTF8&iwloc=B&output=embed" loading="lazy"></iframe>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default ContactForm;
