import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ favoritos }) => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<div className="botonFavoritos btn-group dropstart">
					<button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos
					</button>
					<ul className="dropdown-menu">
						{favoritos.map((persona, index) => (
							<li key={index}><a className="dropdown-item" href="#">{persona.name}</a></li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
