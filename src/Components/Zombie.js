import React from "react";
// import HeadingBg from "../../src/assets/headingbg.png";
import ComicBook from "../../src/assets/comicbook.png";
import zombiebg from "../../src/assets/zombiebg.png";
import zombieImg from "../../src/assets/Zombie.gif";
import ComicImg from "../../src/assets/IMG_1872.PNG";
import ConcertImg from "../../src/assets/concert01.png";
const Zombie = () => {
	return (
		<>
			<section className="main-container" id="zombie">
				<div className="zombie-bg">
					<div className="zombie">
						<div className="container">
							<div className="zombie-content" data-aos="fade-up">
								<div className="zombie-img-wrap">
									<img src={zombiebg} alt="Comic-book-heading" />
									<div className="zombie-heading">
										<h1>zombie</h1>
									</div>
								</div>
								<div className="zombie-wrap">
									<div>
										<h2>AIRDROPPED TO INITIAL MINTERS ONLY</h2>
										<p className="zombie-text">
											How could it be? Have our little companions evolved into
											Zombies and turned against us? Or was it us who were
											against them all along? Has pollution made the Earth’s
											atmosphere too toxic for the Snuggly Spuds?
										</p>
									</div>
								</div>
							</div>
							<div className="zombie-image">
								<img src={zombieImg} alt="zombieImg" data-aos="zoom-in" />
							</div>
						</div>
					</div>
					<div className="comic-book" id="utility">
						<div className="container col-rev">
							<div className="comic-img">
								<img src={ComicImg} alt="comic-img" data-aos="zoom-in" />
							</div>
							<div className="passive-income" data-aos="fade-up">
								<div className="zombie-img-wrap">
									<img src={zombiebg} alt="Comic-book-heading" />
									<div className="zombie-heading">
										<h1>utility</h1>
									</div>
								</div>
								<div className="comic-content">
									<h2>Comic Book</h2>
									<p>
										Spud Holders will have say in the Character development of
										their Unique Spud which will play a part in the storyline of
										the comic book series. Our Artists will be hosting monthly
										townhall meetings to discuss the progress of the series and
										take feedback from our community as well on product
										launches.
									</p>
									<h2>Passive Income</h2>
									<p>
										Based on the comic book series, Merchandise, Toys,
										collectibles and strategic partnerships with online and
										retail stores will be coming soon for Spud owners! Spud
										holders will be given royalties on Sales of each item. It
										literally pays to hold on to your little companion!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="comic-book" id="community">
				<div className="container">
					<div className="comic-book-wrapper" data-aos="fade-up">
						<div className="comic-img-wrap">
							<img src={ComicBook} alt="Comic-book-heading" />
							<div className="zombie-heading">
								<h1>COMMUNITY</h1>
							</div>
						</div>
						<div className="comic-content">
							<h2>Fully paid concert trip</h2>
							<p>
								5 lucky members will be given tickets to their favorites
								artist’s concerts. Coldplay? The Weeknd? BTS? You decide which
								artist you want to see preform live!
							</p>
							<h2>Tesla Model 3 Giveaway</h2>
							<p>
								To promote the worlds transition to sustainable energy a Tesla
								Model 3 to be given away to 1 Lucky Spud Holder.
							</p>
							<h2>Paid trip to chosen locations</h2>
							<p>
								A raffle will be hosted for 5 lucky club members to win a paid
								trip to Lac Rose (Senegal), Sardinia (Italy) or Dorset (UK) to
								raise awareness for climate control as these beautiful wonders
								of the world are at risk due to climate control.s
							</p>
						</div>
					</div>
					<div className="concert-img" data-aos="zoom-in">
						<img src={ConcertImg} alt="Concert" />
					</div>
				</div>
			</section>
		</>
	);
};

export default Zombie;
