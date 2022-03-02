import React from "react";
import { Link } from "react-router-dom";
const Header = ({ section }) => {
	const scrollTo = (id) => {
		let main = document.getElementById("main");
		main && main.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<>
			{section === "home" ? (
				<header id="header" className="header">
					<div className="header__banner header__banner--index">
						<div>
							<p className="header__tittle">
								RECARGAS DE SALDO
								<br />Y PAGO DE SERVICIOS
							</p>
							<p className="header__text">¡Desde la comodidad de tu casa!</p>
							<div className="mt-3">
								<Link to="" className="btn btn-lg rounded-0 btn-primary text-white m-2 border-0" onClick={() => scrollTo("main")}>
									Pagar / Recargar
								</Link>
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
