import React, { useEffect, useState } from "react";
import ComicBook from "../../src/assets/comicbook.png";
import Timer from "../../src/assets/timer.png";
const TimeCounter = () => {
	const [days, setDays] = useState();
	const [hours, setHours] = useState();
	const [mins, setMins] = useState();
	const [sec, setSec] = useState();
	const calculateTime = () => {
		const date = new Date();
		const dDay = new Date("March 18, 2022");
		let dayCount = Math.floor((dDay - date) / (1000 * 24 * 60 * 60));
		let hrsCount = Math.floor(
			((dDay - date) % (1000 * 24 * 60 * 60)) / (1000 * 60 * 60)
		);
		let minCount = Math.floor(
			(((dDay - date) % (1000 * 24 * 60 * 60)) % (1000 * 60 * 60)) / (1000 * 60)
		);
		let secCount = Math.floor(
			((((dDay - date) % (1000 * 24 * 60 * 60)) % (1000 * 60 * 60)) %
				(1000 * 60)) /
				1000
		);

		setSec(secCount);
		setDays(dayCount);
		setHours(hrsCount);
		setMins(minCount);
	};

	useEffect(() => {
		setInterval(() => {
			calculateTime();
		}, 1000);
	}, []);
	return (
		<div className="timer">
			<div className="container">
				<div className="center-heading-wrapper">
					<div className="comic-img-wrap" data-aos="fade-up">
						<img src={ComicBook} alt="Comic-book-heading" />
						<div className="zombie-heading">
							<h1>COUNTDOWN</h1>
						</div>
					</div>
				</div>
				<div className="counter" data-aos="fade-up">
					<div className="single-chart">
						<div className="timer-wrapper">
							<img src={Timer} alt="timer" />
							<div className="timer-txt">
								<h1>{`${days}`}</h1>
								<h3>days</h3>
							</div>
						</div>
					</div>
					<div className="single-chart">
						<div className="timer-wrapper">
							<img src={Timer} alt="timer" />
							<div className="timer-txt">
								<h1>{`${hours}`}</h1>
								<h3>hours</h3>
							</div>
						</div>
					</div>
					<div className="single-chart">
						<div className="timer-wrapper">
							<img src={Timer} alt="timer" />
							<div className="timer-txt">
								<h1>{`${mins}`}</h1>
								<h3>minutes</h3>
							</div>
						</div>
					</div>
					<div className="single-chart">
						<div className="timer-wrapper">
							<img src={Timer} alt="timer" />
							<div className="timer-txt">
								<h1>{`${sec}`}</h1>
								<h3>seconds</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TimeCounter;
