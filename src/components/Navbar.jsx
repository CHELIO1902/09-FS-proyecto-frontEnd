import React from "react";
import { Link } from "react-router-dom";
import logo_movie from '../assets/logo_movie.png'

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light  p-1">
			<Link className="navbar-brand" to="/">
				<img src={logo_movie} alt="logo_movie" className="logo_movie"/>
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="tabs collapse navbar-collapse" id="navbarNav">
			<input type="text" placeholder="Search" className="input input-bordered" />
				<ul className="navbar-nav ms-auto">
					<li className="tab tab-lifted tab-active">
						<Link className="nav-link" to="/">
							Movie List
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/new-message">
							Movie Create
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
