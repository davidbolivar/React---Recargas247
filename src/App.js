import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContex";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import Header from "./components/Header";

function App() {
	return (
		<>
			<CartProvider>
				<BrowserRouter>
					<NavBar />
					<Switch>
						<Route exact path="/">
							<Header section="home" />
							<ItemListContainer />
						</Route>

						<Route exact path="/servicios">
							<ItemListContainer />
						</Route>

						<Route path="/servicios/:service_id">
							<ItemDetailContainer />
						</Route>

						<Route path="/categoria/:category">
							<ItemListContainer />
						</Route>

						<Route exact path="/como-funciona">
							¿Cómo funciona?
						</Route>

						<Route exact path="/preguntas-frecuentes">
							Preguntas
						</Route>

						<Route exact path="/carrito-de-compras">
							<Cart />
						</Route>

						<Route exact path="/contacto">
							<Header section="contacto" />
							<Contact />
						</Route>

						<Route exact path="/finalizar-compra">
							<Checkout />
						</Route>
					</Switch>
				</BrowserRouter>
			</CartProvider>
		</>
	);
}

export default App;
