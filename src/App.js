import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContex";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

function App() {
	// const { totalCart } = useContext(cartContext);
	return (
		<>
			<CartProvider>
				<BrowserRouter>
					<NavBar />
					<Switch>
						<Route exact path="/">
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
