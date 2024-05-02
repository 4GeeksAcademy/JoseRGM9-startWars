import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { App } from "/workspaces/JoseRGM9-startWars/src/js/views/App.js";
import { Navbar } from "/workspaces/JoseRGM9-startWars/src/js/component/navbar.js";
import { Context } from '/workspaces/JoseRGM9-startWars/src/js/store/appContext.js';
import { PersonajeDetalle } from '/workspaces/JoseRGM9-startWars/src/js/component/PersonajeDetalle.jsx';
import { VehiculoDetalle } from '/workspaces/JoseRGM9-startWars/src/js/component/VehiculoDetalle.jsx';
import { PlanetaDetalle } from '/workspaces/JoseRGM9-startWars/src/js/component/PlanetaDetalle.jsx';
import { Footer } from "/workspaces/JoseRGM9-startWars/src/js/component/Footer.jsx";
import { PrimerFooter } from "/workspaces/JoseRGM9-startWars/src/js/component/PrimerFooter.jsx";

import injectContext from "./store/appContext";


//create your first component
const Layout = () => {
	const { store } = useContext(Context);
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar favoritos={store.favoritos} />
					<Routes>
						<Route path="/" element={<App />} />
						<Route path="/personaje/:id" element={<PersonajeDetalle />} />
						<Route path="/vehiculo/:id" element={<VehiculoDetalle />} />
						<Route path="/planeta/:id" element={<PlanetaDetalle />} />
					</Routes>
					<PrimerFooter />
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
