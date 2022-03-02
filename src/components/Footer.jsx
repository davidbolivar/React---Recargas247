import React from "react";

function Footer() {
	return (
		<footer className="text-center border-top bg-light">
			<div className="container">
				<section>
					<a className="btn btn-link btn-floating btn-lg text-secondary m-1" href="https://www.facebook.com/recargas247" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
						<i className="bi bi-facebook"></i>
					</a>

					<a className="btn btn-link btn-floating btn-lg text-secondary m-1" href="https://www.twitter.com/recargas247" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
						<i className="bi bi-twitter"></i>
					</a>

					<a className="btn btn-link btn-floating btn-lg text-secondary m-1" href="https://www.instagram.com/recargas247" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
						<i className="bi bi-instagram"></i>
					</a>
				</section>
			</div>

			<div className="text-center text-dark p-3 bg-primary text-white">
				© 2022 Copyright:{" "}
				<a className="text-white" href="https:www.recargas247.net/">
					www.recargas247.net
				</a>
			</div>
		</footer>
	);
}

export default Footer;
