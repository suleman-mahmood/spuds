import React from "react";
import HeroImg from "../../src/assets/Hero.png";
import HeadingBg from "../../src/assets/headingbg.png";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import styled from "styled-components";

const ConnectButton = styled(WalletDialogButton)`
	width: 100%;
	height: 60px;
	margin-top: 10px;
	margin-bottom: 5px;
	background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);
	color: white;
	font-size: 16px;
	font-weight: bold;
`;

const Hero = () => {
	const clickMint = () => {
		const element = document.getElementById("click-this");
		const mouseClickEvents = ["mousedown", "click", "mouseup"];
		mouseClickEvents.forEach((mouseEventType) => {
			if (element != null) {
				element.dispatchEvent(
					new MouseEvent(mouseEventType, {
						view: window,
						bubbles: true,
						cancelable: true,
						buttons: 1,
					})
				);
			}
		});
	};

	return (
		<section className="hero">
			<div className="hero-content">
				<div className="hero-img-wrap">
					<img src={HeadingBg} alt="heading-bg" />
					<div className="hero-heading">
						<h1>SNUGGLY SPUDS</h1>
					</div>
				</div>
				<p>9999 spuds just snuggled their way in the Solana metaverse</p>
				<p>Join the SPUD CLUB</p>
				<a href="#" className="mint-btn" onClick={clickMint}>
					Mint Now
				</a>
				<div className="hidden">
					<ConnectButton id="click-this">Connect Wallet</ConnectButton>
				</div>
			</div>
			<div className="hero-feature-img">
				<img src={HeroImg} alt="Hero-img" />
			</div>
		</section>
	);
};

export default Hero;
