import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import ItemListContainer from "./components/ItemListContainer";
import GetFakeUsers from "./components/GetFakeUsers";

function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer />
			{/* <GetFakeUsers /> */}
		</>
	);
}

export default App;
