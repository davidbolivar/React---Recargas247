import React from "react";

const Header = ({ section }) => {
	return (
		<>
			{section === "home" ? (
				<header id="header" className="header">
					{/* <!-- HEADER BANNER --> */}
					<div className="header__banner header__banner--index">
						<div>
							<p className="header__tittle">
								RECARGAS DE SALDO
								<br />Y PAGO DE SERVICIOS
							</p>
							<p className="header__text">¡Desde la comodidad de tu casa!</p>
							<div className="mt-3">
								<a href="#como-funciona" className="btn btn-lg rounded-0 btn-secondary text-white m-2">
									¿Cómo funciona?
								</a>
								<a href="#recharge_form" className="btn btn-lg rounded-0 btn-primary text-white m-2">
									PAGAR / RECARGAR
								</a>
							</div>
						</div>
					</div>
				</header>
			) : (
				<>
					{
						<header id="header" className="header">
							<div className={`header__banner header__banner--${section}`}></div>
						</header>
					}
				</>
			)}
		</>
	);
};
export default Header;
