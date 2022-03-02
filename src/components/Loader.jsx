import React from "react";
import "../App.css";
import { Col, Card } from "react-bootstrap";

const Loader = () => {
	return (
		<Col className="vertical-align" style={{ minHeight: "80vh" }}>
			<Card.Img variant="top" style={{ width: "200px", maxWidth: "500px", margin: "auto" }} src="https://www.tesalys.fr/wp-content/themes/tesalys/assets/img/loading.gif.pagespeed.ce.P-qoNhz1E8.gif" />
		</Col>
	);
};

export default Loader;
