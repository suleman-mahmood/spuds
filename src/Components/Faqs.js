import React, { useState } from "react";
import Arrow from "../../src/assets/arrow-3.png";
import zombiebg from "../../src/assets/zombiebg.png";
// import ComicBook from "../../src/assets/comicbook.png";

const Faqs = () => {
	const [isActive1, setIsActive1] = useState(false);
	const [isActive2, setIsActive2] = useState(false);
	const [isActive3, setIsActive3] = useState(false);
	const [isActive4, setIsActive4] = useState(false);
	const [isActive5, setIsActive5] = useState(false);
	const [isActive6, setIsActive6] = useState(false);
	const [isActive7, setIsActive7] = useState(false);

	return (
		<section className="faq" id="faqs">
			<div className="container">
				<div className="center-heading-wrapper">
					<div className="zombie-img-wrap" data-aos="fade-up">
						<img src={zombiebg} alt="Comic-book-heading" />
						<div className="zombie-heading">
							<h1>faq</h1>
						</div>
					</div>
				</div>
				<div className="question-container" data-aos="fade-up">
					<div className="question-wrapper">
						<div className="question" onClick={() => setIsActive1(!isActive1)}>
							<p>What are the Snuggly Spuds? </p>
							<img src={Arrow} alt="arrow" />
						</div>
						<div
							className={
								isActive1 ? "question-panel question-active" : "question-panel"
							}
						>
							The Snuggly Spuds are an NFT collection that will be making its
							investors part-owners by launching a comic book series and
							merchandise store soon.
						</div>
					</div>
					<div className="question-wrapper">
						<div className="question" onClick={() => setIsActive2(!isActive2)}>
							<p>What does part ownership mean?</p>
							<img src={Arrow} alt="arrow" />
						</div>
						<div
							className={
								isActive2 ? "question-panel question-active" : "question-panel"
							}
						>
							As a holder, you will be disbursed profits from the sale of
							merchandise and the comic book series.
						</div>
					</div>
					<div className="question-wrapper">
						<div className="question" onClick={() => setIsActive3(!isActive3)}>
							<p>How will the online store become a success?</p>
							<img src={Arrow} alt="arrow" />
						</div>
						<div
							className={
								isActive3 ? "question-panel question-active" : "question-panel"
							}
						>
							With collaboration from top celebrities and an army of 9999 spud
							owners, we'll quickly become a well-known brand.
						</div>
					</div>
					<div className="question-wrapper">
						<div className="question" onClick={() => setIsActive4(!isActive4)}>
							<p>How do I mint a Snuggly Spud?</p>
							<img src={Arrow} alt="arrow" />
						</div>
						<div
							className={
								isActive4
									? "question-panel question-active-lg"
									: "question-panel"
							}
						>
							<ul>
								<li>
									Which wallet is recommended?
									<br />
									You can use any wallet that is compatible with Solana.
									However, we recommend using Phantom
								</li>
								<li>
									How to set up Phantom wallet?
									<br />
									Phantom is simple and fast to use, and it is the recommended
									tool to use when buying and selling NFT's.
									<br />
									Watch the tutorial below to learn how to set up your Phantom
									wallet:
									<a href="https://www.youtube.com/watch?v=4vzgPiLrpAE">
										https://www.youtube.com/watch?v=4vzgPiLrpAE
									</a>
								</li>
								<li>
									What is the next step after setting up the wallet? <br />
									Once the wallet is set up, you will need to buy SOL and send
									it to your Phantom wallet. You can do that using any platform
									that enables you to purchase cryptocurrencies such as Coinbase
									and Binance.
									<br />
									How to send crypto from Binance to Phantom wallet?
									<a href="https://www.youtube.com/watch?v=iF9gnYf_mwk">
										https://www.youtube.com/watch?v=iF9gnYf_mwk
									</a>
									<br />
									How to send crypto from Coinbase to Phantom wallet?
									<a href="https://www.youtube.com/watch?v=vmDuzUA7jHY">
										https://www.youtube.com/watch?v=vmDuzUA7jHY
									</a>
								</li>
								<li>
									How to mint the Snuggly Spud NFT?
									<br />
									Go over to our website:
									<a href="https://snugglyspuds.io/">
										https://snugglyspuds.io/
									</a>
									<br />
									Click on the mint button and approve the transaction on your
									wallet.
									<br />
									We will upload a video showing the exact steps closer to the
									mint date to clear any confusion.
								</li>
							</ul>
						</div>
					</div>
					<div className="question-wrapper">
						<div className="question" onClick={() => setIsActive5(!isActive5)}>
							<p>When will I be able to mint a Snuggly Spud?</p>
							<img src={Arrow} alt="arrow" />
						</div>
						<div
							className={
								isActive5 ? "question-panel question-active" : "question-panel"
							}
						>
							TBA
						</div>
					</div>
					<div className="question-wrapper">
						<div className="question" onClick={() => setIsActive6(!isActive6)}>
							<p>What happens after I mint a Snuggly Spud?</p>
							<img src={Arrow} alt="arrow" />
						</div>
						<div
							className={
								isActive6 ? "question-panel question-active" : "question-panel"
							}
						>
							Snuggly Spuds will be integrated into secondary markets such as
							Solanart and Magic Eden. You could either sell at a higher price
							to profit or hold on to keep receiving passive income from the
							store sales.
						</div>
					</div>
					<div className="question-wrapper">
						<div className="question" onClick={() => setIsActive7(!isActive7)}>
							<p>What does the Spud Club represent?</p>
							<img src={Arrow} alt="arrow" />
						</div>
						<div
							className={
								isActive7 ? "question-panel question-active" : "question-panel"
							}
						>
							The Spud Club is our discord channel where our community hangs
							out, has gaming competitions and meetings to discuss the long-term
							aims of the projects.
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faqs;
