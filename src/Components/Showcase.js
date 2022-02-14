import React from "react";
import ComicBook from "../../src/assets/comicbook.png";
import one from "../../src/assets/1.png";
import two from "../../src/assets/4.png";
import three from "../../src/assets/3.png";
import four from "../../src/assets/8.png";
import five from "../../src/assets/9.png";
import six from "../../src/assets/14.png";
import seven from "../../src/assets/23.png";
import eight from "../../src/assets/28.png";
import nine from "../../src/assets/36.png";
import ten from "../../src/assets/37.png";
import eleven from "../../src/assets/45.png";
import sixtytwo from "../../src/assets/62.png";
import sixtyseven from "../../src/assets/67.png";
import sixtynine from "../../src/assets/69.png";
import seventytwo from "../../src/assets/72.png";
import nintyeight from "../../src/assets/98.png";
import onezerofour from "../../src/assets/104.png";
import oneft from "../../src/assets/142.png";
import onesf from "../../src/assets/157.png";
import onefe from "../../src/assets/158.png";
import twooe from "../../src/assets/208.png";
import threefe from "../../src/assets/358.png";
const Showcase = () => {
	return (
		<>
			<section className="showcase" id="showcase">
				<div className="container">
					<div className="center-heading-wrapper">
						<div className="comic-img-wrap" data-aos="fade-up">
							<img src={ComicBook} alt="Comic-book-heading" />
							<div className="zombie-heading">
								<h1>SHOWCASE</h1>
							</div>
						</div>
					</div>
					<div className="main-showcase" data-aos="fade-up">
						<div className="inner">
							<div className="showcase-img">
								<img src={one} alt="one" />
							</div>
							<div className="showcase-img">
								<img src={two} alt="one" />
							</div>
						</div>
						<div className="inner">
							<div className="showcase-img">
								<img src={three} alt="one" />
							</div>
							<div className="showcase-img">
								<img src={four} alt="one" />
							</div>
						</div>
						<div className="inner">
							<div className="showcase-img">
								<img src={four} alt="one" />
							</div>
							<div className="showcase-img">
								<img src={five} alt="one" />
							</div>
						</div>
						<div className="inner">
							<div className="showcase-img">
								<img src={six} alt="one" />
							</div>
							<div className="showcase-img">
								<img src={seven} alt="one" />
							</div>
						</div>
						<div className="inner">
							<div className="showcase-img">
								<img src={eight} alt="one" />
							</div>
							<div className="showcase-img">
								<img src={nine} alt="one" />
							</div>
						</div>
						<div className="inner">
							<div className="showcase-img">
								<img src={ten} alt="one" />
							</div>
							<div className="showcase-img">
								<img src={eleven} alt="one" />
							</div>
						</div>
						<div className="inner">
							<div className="showcase-img">
								<img src={sixtytwo} alt="one" />
							</div>
							<div className="showcase-img">
								<img src={sixtyseven} alt="one" />
							</div>
						</div>
						<div className="inner">
							<div className="showcase-img">
								<img src={sixtynine} alt="one" />
							</div>
							<div className="showcase-img">
								<img src={seventytwo} alt="one" />
							</div>
						</div>
						<div className="inner">
							<div className="showcase-img">
								<img src={nintyeight} alt="one" />
							</div>
							<div className="showcase-img">
								<img src={onezerofour} alt="one" />
							</div>
						</div>
						<div className="inner">
							<div className="showcase-img">
								<img src={oneft} alt="one" />
							</div>
							<div className="showcase-img">
								<img src={threefe} alt="one" />
							</div>
						</div>
						<div className="inner">
							<div className="showcase-img">
								<img src={twooe} alt="one" />
							</div>
							<div className="showcase-img">
								<img src={onefe} alt="one" />
							</div>
						</div>
						<div className="inner">
							<div className="showcase-img">
								<img src={onesf} alt="one" />
							</div>
							<div className="showcase-img">
								<img src={one} alt="one" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Showcase;
