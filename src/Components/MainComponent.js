import React, { useEffect } from "react";
import "../App.css";
import Aos from "aos";
import Particles from "react-tsparticles";
import "aos/dist/aos.css";
import Faqs from "./Faqs";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Roadmap from "./Roadmap";
import Showcase from "./Showcase";
import TimeCounter from "./TimeCounter";
import Zombie from "./Zombie";

function MainComponent() {
	// cursor
	function cursor() {
		const cursor = document.querySelector(".cursor");
		const cursorInner = document.querySelector(".cursor-move-inner");
		const cursorOuter = document.querySelector(".cursor-move-outer");

		const trigger = document.querySelector("a,img");

		let mouseX = 0;
		let mouseY = 0;
		// let mouseA = 0;

		let innerX = 0;
		let innerY = 0;

		let outerX = 0;
		let outerY = 0;

		let loop = null;

		document.addEventListener("mousemove", (e) => {
			mouseX = e.clientX;
			mouseY = e.clientY;

			if (!loop) {
				loop = window.requestAnimationFrame(render);
			}
		});

		trigger.addEventListener("mouseenter", () => {
			cursor.classList.add("cursor--hover");
		});

		trigger.addEventListener("mouseleave", () => {
			cursor.classList.remove("cursor--hover");
		});
		function render() {
			// stats.begin();

			loop = null;

			innerX = lerp(innerX, mouseX, 0.15);
			innerY = lerp(innerY, mouseY, 0.15);

			outerX = lerp(outerX, mouseX, 0.13);
			outerY = lerp(outerY, mouseY, 0.13);

			const angle = (Math.atan2(mouseY - outerY, mouseX - outerX) * 180) / Math.PI;

			const normalX = Math.min(Math.floor((Math.abs(mouseX - outerX) / outerX) * 1000) / 1000, 1);
			const normalY = Math.min(Math.floor((Math.abs(mouseY - outerY) / outerY) * 1000) / 1000, 1);
			const normal = normalX + normalY * 0.5;
			const skwish = normal * 0.7;

			cursorInner.style.transform = `translate3d(${innerX}px, ${innerY}px, 0)`;
			cursorOuter.style.transform = `translate3d(${outerX}px, ${outerY}px, 0) rotate(${angle}deg) scale(${
				1 + skwish
			}, ${1 - skwish})`;

			// stats.end();

			// Stop loop if interpolation is done.
			if (normal !== 0) {
				loop = window.requestAnimationFrame(render);
			}
		}
		function lerp(s, e, t) {
			return (1 - t) * s + t * e;
		}
	}

	useEffect(() => {
		Aos.init({ duration: 1500 });
		cursor();
	}, []);
	return (
		<>
			<div id="tsparticles">
				<Particles
					id="tsparticles"
					options={{
						background: {
							color: {
								value: "#060A19",
							},
						},
						fpsLimit: 120,
						interactivity: {
							events: {
								onClick: {
									enable: true,
									mode: "remove",
								},

								resize: true,
							},
							modes: {
								remove: {
									quantity: 10,
								},
							},
						},
						particles: {
							color: {
								value: "#ffffff",
							},
							links: {
								enable: false,
							},
							collisions: {
								enable: true,
							},
							move: {
								direction: "random",
								enable: true,
								outMode: "out",
								random: false,
								speed: 0.7,
								straight: false,
							},
							number: {
								density: {
									enable: false,
								},
								value: 50,
							},
							opacity: {
								value: 0.5,
							},
							shape: {
								type: "circle",
							},
							size: {
								random: true,
								value: 5,
							},
						},
						detectRetina: true,
					}}
				/>
			</div>
			<span className="cursor">
				<span className="cursor-move-inner">
					<span className="cursor-inner"></span>
				</span>
				<span className="cursor-move-outer">
					<span className="cursor-outer"></span>
				</span>
			</span>
			<div className="root-container">
				<Header />
				<Hero />
				<Showcase />
				<Zombie />
				<Roadmap />
				<div className="counter-bg">
					<TimeCounter />
					<Faqs />
				</div>
				<Footer />
			</div>
		</>
	);
}

export default MainComponent;
