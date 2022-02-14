import React, { useState, useEffect } from "react";
import logo from "../../src/assets/logo-3.png";
const Header = () => {
	const [navActive, isnavActive] = useState(false);

	useEffect(() => {
		let url = window.location.href.split("/");
		let target = url[url.length - 1].toLowerCase();
		let element = document.getElementById(target);
		element && element.scrollIntoView({ behavior: "smooth", block: "start" });
	}, []);
	return (
		<div className="header">
			<header>
				<nav>
					<div className="logo">
						<a href="/">
							<img src={logo} alt="logo" />
						</a>
					</div>
					<ul className={navActive ? "nav-active" : ""}>
						<li>
							<a
								href="/"
								onClick={(e) => {
									let showcase = document.getElementById("showcase");
									e.preventDefault();
									showcase &&
										showcase.scrollIntoView({
											behavior: "smooth",
											block: "start",
										});
									window.history.pushState("showcase", "showcase", "/");
								}}
							>
								Showcase
							</a>
						</li>
						<li>
							<a
								href="/"
								onClick={(e) => {
									let zombie = document.getElementById("zombie");
									e.preventDefault();
									zombie &&
										zombie.scrollIntoView({
											behavior: "smooth",
											block: "start",
										});
									window.history.pushState("zombie", "zombie", "/");
								}}
							>
								Zombie
							</a>
						</li>
						<li>
							<a
								href="/"
								onClick={(e) => {
									let utility = document.getElementById("utility");
									e.preventDefault();
									utility &&
										utility.scrollIntoView({
											behavior: "smooth",
											block: "start",
										});
									window.history.pushState("utility", "utility", "/");
								}}
							>
								Utility
							</a>
						</li>
						<li>
							<a
								href="/"
								onClick={(e) => {
									let community = document.getElementById("community");
									e.preventDefault();
									community &&
										community.scrollIntoView({
											behavior: "smooth",
											block: "start",
										});
									window.history.pushState("community", "community", "/");
								}}
							>
								Community
							</a>
						</li>
						<li>
							<a
								href="/"
								onClick={(e) => {
									let roadmap = document.getElementById("roadmap");
									e.preventDefault();
									roadmap &&
										roadmap.scrollIntoView({
											behavior: "smooth",
											block: "start",
										});
									window.history.pushState("roadmap", "roadmap", "/");
								}}
							>
								Roadmap
							</a>
						</li>
						<li>
							<a
								href="/"
								onClick={(e) => {
									let faqs = document.getElementById("faqs");
									e.preventDefault();
									faqs &&
										faqs.scrollIntoView({
											behavior: "smooth",
											block: "start",
										});
									window.history.pushState("faqs", "faqs", "/");
								}}
							>
								FAQs
							</a>
						</li>
						<li>
							<a href="/" className="nav-mint-btn">
								Mint Now
							</a>
						</li>
					</ul>
					<div className="hamburger" onClick={() => isnavActive(!navActive)}>
						<div className="line1"></div>
						<div className="line2"></div>
						<div className="line3"></div>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Header;
