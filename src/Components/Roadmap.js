import React from "react";
// import zombiebg from "../../src/assets/zombiebg.png";
import ComicBook from "../../src/assets/comicbook.png";
const Roadmap = () => {
	return (
		<>
			<section className="roadmap-sec" id="roadmap">
				<div className="container">
					<div className="center-heading-wrapper">
						<div className="comic-img-wrap" data-aos="fade-up">
							<img src={ComicBook} alt="Comic-book-heading" />
							<div className="zombie-heading">
								<h1>Roadmap</h1>
							</div>
						</div>
					</div>
					<div className="roadmap">
						<div className="roadmap-timeline">
							<div className="roadmap-container left">
								<div className="roadmap-content bg-left" data-aos="zoom-in">
									<h2>Stage 01</h2>
									<ul>
										<li>
											Set up the Snuggly Socials and host trivias, competitons
											and games for Whitelisting Spots and Giveaways.
										</li>
										<li>
											Build the Snuggly Spud Club that revolves around kindness
											compassion and supporting each other.
										</li>
										<li>
											Announcement of Tesla Model 3, Paid Vaction Trips and
											Partner with a charity organisation that will receive
											25000 USD.
										</li>
									</ul>
								</div>
							</div>
							<div className="roadmap-container right">
								<div className="roadmap-content" data-aos="zoom-in">
									<h2>Stage 02</h2>
									<ul>
										<li>Presale mint for whitelisted spots</li>
										<li>Public mint held after presale spots occupied</li>
										<li>Completion of minting process</li>
									</ul>
								</div>
							</div>
							<div className="roadmap-container left">
								<div className="roadmap-content bg-left" data-aos="zoom-in">
									<h2>Stage 03</h2>
									<ul>
										<li>Tesla Model 3 giveaway to a lucky spud</li>
										<li>Paid trip winners announced</li>
										<li>Concert trip winners announced</li>
									</ul>
								</div>
							</div>
							<div className="roadmap-container right">
								<div className="roadmap-content" data-aos="zoom-in">
									<h2>Stage 04</h2>
									<ul>
										<li>
											Our team of amazon, shopify and wallmart experts start
											building our Global Merch Store.
										</li>
										<li>Our Artists start working the comic book series.</li>
									</ul>
								</div>
							</div>
							<div className="roadmap-container left">
								<div className="roadmap-content bg-left" data-aos="zoom-in">
									<h2>Stage 05</h2>
									<ul>
										<li>
											Host gaming competions and DJ sets on discord and give our
											Spud Club members weekly updates on the progress made.
										</li>
										<li>
											Hold monthly townhall meetings to set the project's
											direction and receive feedback from the Spud Club.
										</li>
										<li>
											Partner with other NFT projects and Celebrities to give
											the Spud Club exclusive benefits.
										</li>
										<li>
											Partner with different retail companies to make the
											Snuggly Spuds a leading brand.
										</li>
									</ul>
								</div>
							</div>
							<div className="roadmap-container right">
								<div className="roadmap-content" data-aos="zoom-in">
									<h2>Stage 06</h2>
									<ul>
										<li>
											Launch our Global Merch Store (Hold to Earn feature
											enabled)
										</li>
										<li>
											Disburse Monthly Royalties to our Holder's wallets from
											Brand Sales.
										</li>
										<li>Zombie Spuds airdropped to initial minters.</li>
									</ul>
								</div>
							</div>
							<div className="roadmap-container left">
								<div className="roadmap-content bg-left" data-aos="zoom-in">
									<h2>Stage 07</h2>
									<ul>
										<li>Launch Comic Book Series </li>
										<li>Have fun on the moon with the Spud Club!</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Roadmap;
