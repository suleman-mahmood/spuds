import { useEffect, useState } from "react";
import styled from "styled-components";

import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import Accordian from "./accordian";
import CountdownTimer from "./countdown";

// Importing images
import chairImage from "../assets/chair.png";
import concertImage from "../assets/concert.jpeg";
import roadmapImage from "../assets/roadmap.png";
import spud1 from "../assets/spud-1.jpeg";
import spud2 from "../assets/spud-2.jpeg";
import spud3 from "../assets/spud-3.jpeg";
import spud4 from "../assets/spud-4.jpeg";
import spud5 from "../assets/spud-5.jpeg";
import spud6 from "../assets/spud-6.jpeg";
import spud7 from "../assets/spud-7.jpeg";
import spud8 from "../assets/spud-8.jpeg";
import spud9 from "../assets/spud-9.jpeg";
import spud10 from "../assets/spud-10.jpeg";
import spud11 from "../assets/spud-11.jpeg";
import spud12 from "../assets/spud-12.jpeg";
import twitter from "../assets/twitter.png";
import discord from "../assets/discord.png";
import zombieHand from "../assets/zombie-hand.png";
import nftLogo from "../assets/nft-logo.png";
import dropdown from "../assets/dropdown.png";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import Countdown from "react-countdown";
import { setInterval } from "timers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJCxxf2RLsK6wZMMztG52_APOnR37eqHw",
  authDomain: "spuds-596b7.firebaseapp.com",
  projectId: "spuds-596b7",
  storageBucket: "spuds-596b7.appspot.com",
  messagingSenderId: "302538585848",
  appId: "1:302538585848:web:b0dd856724807e69e7ad0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const ConnectButton = styled(WalletDialogButton)``;

const BasicMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="px-4 cursor-pointer md:hidden">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Button>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <a href="#showcase" className="p-4">
            Showcase
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#comic" className="p-4">
            Comic Book
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#roadmap" className="p-4">
            Roadmap
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#faqs" className="p-4">
            FAQs
          </a>
        </MenuItem>
      </Menu>
    </>
  );
};

const LandingPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [faqs] = useState([
    {
      question: "What are the Snuggly Spuds? ",
      answer: "The Snuggly Spuds are an NFT collection that will be making its investors part-owners by launching a comic book series and merchandise store soon.",
    },
    {
      question: "What does part ownership mean?",
      answer: "As a holder you will be disbursed profits from the sale of merchandise and the comic book series.",
    },
    {
      question: "How will the online store become a success?",
      answer: "With collaboration from top celebrities and an army of 9999 spud owners we'll quickly become a well known brand.",
    },
    {
      question: "How do I mint a Snuggly Spud?",
      answer: "TBD",
    },
    {
      question: "When will I be able to mint a Snuggly Spud?",
      answer: "TBD",
    },
    {
      question: "What happens after I mint a Snuggly Spud?",
      answer: "Snuggly Spuds will be integrated into secondary markets such as Solanart and Magiceden. You could either sell at a higher price to profit or hold on to keep receiving profits from the store.",
    },
    {
      question: "What does the Spud Club represent?",
      answer: "The Spud Club is our discord channel where our community hangs out, has gaming competition and meetings to discusses the long term aims of the projects.",
    },
  ]);

  const [mintDate] = useState(1643517900000);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      const element = document.getElementById("nav-container");
      if (element != null) {
        const factor = window.pageYOffset / 500;
        element.style.backgroundImage = `linear-gradient(to right, rgba(81, 53, 124, ${factor}), rgba(8, 46, 135, ${factor}))`;
      }
    };

    setInterval(() => {
      const timeLeft = mintDate - Date.now();

      const days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
      const daysms = timeLeft % (24 * 60 * 60 * 1000);
      const hours = Math.floor(daysms / (60 * 60 * 1000));
      const hoursms = timeLeft % (60 * 60 * 1000);
      const minutes = Math.floor(hoursms / (60 * 1000));
      const minutesms = timeLeft % (60 * 1000);
      const sec = Math.floor(minutesms / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSec(sec);
    }, 1000)

  }, []);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(name, email, walletAddress);

    addDoc(collection(db, "whitelist"), {
      "name": name,
      "email": email,
      "walletAddress": walletAddress
    })
      .then(() => {
        console.log("Whitelist entry added successfully")
      })
  }

  return (
    <>
      {/* 
      TODO List:

        - Do something about roadmap
        - Finish Countdown

        Blocking:
        - Insert correct zombie gif
        - Comic book video
        - Replace logo with the spuds logo
        - Insert real FAQs
        - Button background Image (Fix styling on buttons)
      */}

      {/* Navbar */}

      <nav
        id="nav-container"
        role="navigation"
        className="w-full flex md:justify-center justify-around items-center text-white primary-font fixed top-0"
      >
        <div className="flex items-center md:mr-32">
          <img
            src="https://cdn2.iconfinder.com/data/icons/fruits-and-vegetables-25/85/potatoes_potato_vegetable_food-256.png"
            width="50"
            className="mx-4"
            alt="logo"
          ></img>
          <a href="#" className="">
            LOGO
          </a>
        </div>

        {/* <div className="px-4 cursor-pointer md:hidden">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div> */}
        <BasicMenu></BasicMenu>
        <div className="hidden md:block">
          <a href="#showcase" className="p-4">
            Showcase
          </a>
          <a href="#comic" className="p-4">
            Comic Book
          </a>
          <a href="#roadmap" className="p-4">
            Roadmap
          </a>
          <a href="#faqs" className="p-4">
            FAQs
          </a>
        </div>
      </nav>

      {/* Spuds NFT Collection */}

      <section className="flex flex-col items-center mt-16">
        <div className="p-4 card-bg lg:text-4xl text-xl primary-font">
          Spuds NFT Collection
        </div>
        <p className="mt-4 lg:w-3/5 w-4/5 text-center">
          Join the Spud Club to build the 1st community driven comic book series
          based nfts <br /> Win paid trips to the wonders of the world that are
          at risk due to climate change <br />{" "}
          <u>Locations include Italy, Senegal and the UK</u> <br /> Win 20,000
          USD in Lucky draws, Concert tickets by your favorite artists and much
          much more! <br /> Embrace your Little Companion in GEN-1 and witness
          all hell break loose in ZOMBIE GEN-2. <br />{" "}
          <b> GET 2 NFTS PER MINT </b>
        </p>
        <div className="flex mb-4">
          <img src={twitter} width="50" className="" alt="logo"></img>
          <img src={discord} width="50" className="" alt="logo"></img>
        </div>
        <div className="hidden">
          <ConnectButton id="click-this">Mint Now</ConnectButton>
        </div>
        <button
          className="primary-font custom-gradient py-2 px-6 m-2 rounded-full"
          onClick={clickMint}
        >
          Mint Now
        </button>
        <img src={chairImage} className="w-full" alt="logo"></img>
      </section>

      {/* White Listing */}

      <section className="flex flex-col items-center justify-center mt-16">
        <div className="p-4 card-bg lg:text-4xl text-xl primary-font">
          WhiteList Now
        </div>

        <div className="w-10/12 lg:w-6/12 px-4 m-2">
          <form onSubmit={handleSubmit}>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 custom-gradient rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 custom-gradient rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              >
                Wallet Address
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 custom-gradient rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                onChange={(e) => setWalletAddress(e.target.value)}
              />
            </div>
            <button className="card-bg p-4 primary-font" type="submit">Submit</button>
          </form>
        </div>
      </section>

      {/* Show Case */}

      <section id="showcase" className="flex flex-col items-center mt-32">
        <div className="p-4 card-bg lg:text-4xl text-xl primary-font">
          Show Case
        </div>

        {/* Show Case Slider */}

        <div className="lg:w-3/4 w-10/12 flex overflow-x-auto scroll-to-right">
          <div className="w-1/4 flex flex-col flex-none">
            <img src={spud1} className="lg:p-4 p-2" alt="logo"></img>
            <img src={spud2} className="lg:p-4 p-2" alt="logo"></img>
          </div>
          <div className="w-1/4 flex flex-col flex-none">
            <img src={spud3} className="lg:p-4 p-2" alt="logo"></img>
            <img src={spud4} className="lg:p-4 p-2" alt="logo"></img>
          </div>
          <div className="w-1/4 flex flex-col flex-none">
            <img src={spud5} className="lg:p-4 p-2" alt="logo"></img>
            <img src={spud6} className="lg:p-4 p-2" alt="logo"></img>
          </div>
          <div className="w-1/4 flex flex-col flex-none">
            <img src={spud7} className="lg:p-4 p-2" alt="logo"></img>
            <img src={spud8} className="lg:p-4 p-2" alt="logo"></img>
          </div>
          <div className="w-1/4 flex flex-col flex-none">
            <img src={spud9} className="lg:p-4 p-2" alt="logo"></img>
            <img src={spud10} className="lg:p-4 p-2" alt="logo"></img>
          </div>
          <div className="w-1/4 flex flex-col flex-none">
            <img src={spud11} className="lg:p-4 p-2" alt="logo"></img>
            <img src={spud12} className="lg:p-4 p-2" alt="logo"></img>
          </div>
        </div>
      </section>

      {/* Zombie */}

      <section id="zombie" className="w-full flex justify-center mt-32">
        <div className="flex lg:w-3/4 w-10/12 lg:flex-row flex-col items-center">
          <div className="flex flex-col lg:items-start items-center lg:w-1/2 w-10/12">
            <div className="p-4 m-4 card-bg lg:text-4xl text-xl primary-font">
              ZOMBIE – Phase 2
            </div>

            <div className="flex lg:flex-row flex-col lg:items-start items-center mb-4">
              <img src={zombieHand} className="h-20 m-4" alt="logo"></img>
              <div className="flex flex-col lg:items-start items-center lg:text-left text-center">
                <h2 className="primary-font">Title</h2>
                <p>
                  How could it be? Have our little companions have turned
                  against us? Or was it us who were against them all along? Has
                  mankind made Earth’s atmosphere too toxic for the spuds to
                  survive.
                </p>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col lg:items-start items-center mb-4">
              <img src={nftLogo} className="h-20 m-4" alt="logo"></img>
              <div className="flex flex-col lg:items-start items-center lg:text-left text-center">
                <h2 className="primary-font">Title</h2>
                <p>
                  Bring the joy and cuteness back to the super spuds by minting.
                  10% of revenue from mint and royalties go to a charity of your
                  choice that is helping eradicate pollution and increasing
                  sustainable practices to tackle the climate crises.
                </p>
              </div>
            </div>
          </div>
          <img src={spud2} className="m-4 lg:w-1/2 w-full" alt="logo"></img>
        </div>
      </section>

      {/* Comic Book */}

      <section id="comic" className="w-full flex justify-center mt-32">
        <div className="flex lg:w-3/4 w-10/12 lg:flex-row flex-col items-center">
          <img src={spud1} className="m-4 w-1/2" alt="logo"></img>
          <div className="flex flex-col items-start lg:w-1/2 w-10/12 ">
            <div className="p-4 m-4 card-bg lg:text-4xl text-xl primary-font">
              COMIC BOOK SERIES – Phase 3
            </div>
            <p className="m-4">
              Its time to bring the spuds into physical existence as well. Help
              us build the first community driven NFT comic book series.
            </p>
            <p className="m-4">
              Merch and strategic partnerships with retail stores coming soon!
              NFT holders will be disbursed royalties on sales!
            </p>
          </div>
        </div>
      </section>

      {/* COMMUNITY ENGAGEMENT */}

      <section id="community" className="w-full flex justify-center mt-32">
        <div className="flex lg:w-3/4 w-10/12 lg:flex-row flex-col items-center">
          <div className="flex flex-col items-start  w-10/12 lg:text-left text-center lg:items-start items-center">
            <div className="p-4 m-4 card-bg lg:text-4xl text-xl primary-font">
              COMMUNITY ENGAGEMENT
            </div>
            <p className="m-4">
              A raffle will be hosted for 10 lucky club members to win a paid
              trip to Lac Rose (Senegal), Sardinia (Italy) and Dorset (UK) to
              raise awareness for climate control. These beautiful wonders of
              the world are at risk due to climate control. The Super Spuds will
              be donating funds to an organization decided by the club members
              to battle the climate crisis.
            </p>
            <p className="m-4">
              10 lucky members will be given tickets to their favorites artist’s
              concerts. Coldplay? The Weeknd? BTS? You decide which artist you
              want to see preform live!
            </p>
            <p className="m-4">
              We will host weekly gaming events and Townhall meetings to discuss
              the progress and the overall aim of the community!
            </p>
          </div>
          <img
            src={concertImage}
            className="m-4 lg:w-1/2 w-10/12"
            alt="logo"
          ></img>
        </div>
      </section>

      {/* Roadmap */}

      <section id="roadmap" className="flex flex-col items-center mt-32">
        <div className="p-4 card-bg lg:text-4xl text-xl primary-font">
          Roadmap
        </div>

        <img
          src={roadmapImage}
          className="lg:w-3/4 w-10/12 m-4"
          alt="logo"
        ></img>
      </section>

      {/* Countdown */}

      <section id="countdown" className="flex flex-col items-center mt-32">
        <div className="p-4 card-bg lg:text-4xl text-xl primary-font mb-12">
          Countdown
        </div>
        <div className="flex justify-center items-center flex-wrap w-full">
          <div className="m-4">
            <CountdownTimer value={days} postfix="days" upperBound={30}></CountdownTimer>
          </div>
          <div className="m-4">
            <CountdownTimer value={hours} postfix="hours" upperBound={24}></CountdownTimer>
          </div>
          <div className="m-4">
            <CountdownTimer value={minutes} postfix="mins" upperBound={60}></CountdownTimer>
          </div>
          <div className="m-4">
            <CountdownTimer value={sec} postfix="seconds" upperBound={60}></CountdownTimer>
          </div>
        </div>
      </section>

      {/* FAQs */}

      <section id="faqs" className="flex flex-col items-center mt-32">
        <div className="p-4 card-bg lg:text-4xl text-xl primary-font mb-8">
          Frequent Questions
        </div>

        <div className="flex justify-center w-full">
          <div className="flex flex-wrap text-center lg:w-3/4 w-10/12 justify-center">

            {faqs.map(qna => {
              return (
                <div className="m-2 lg:w-2/5 w-full flex justify-between items-center">
                  <Accordian question={qna.question} answer={qna.answer} ></Accordian>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}

      <div className="flex lg:flex-row flex-col justify-center items-center mt-32 text-white primary-font">
        <div className="flex lg:w-1/4 w-2/4 justify-center items-center">
          <img
            src="https://cdn2.iconfinder.com/data/icons/fruits-and-vegetables-25/85/potatoes_potato_vegetable_food-256.png"
            width="50"
            className="m-4"
            alt="logo"
          ></img>
          <button>LOGO</button>
        </div>

        <p className="lg:w-1/4 w-2/4 text-center secondary-font">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
          maxime!
        </p>

        <div className="flex lg:w-1/4 w-2/4 justify-center items-center">
          <img src={twitter} width="50" className="m-4" alt="logo"></img>
          <img src={discord} width="50" className="m-4" alt="logo"></img>
        </div>
      </div>

      <p className="secondary-text text-center m-8">
        Copyright 2021 &copy; Sputs
      </p>
    </>
  );
};

export default LandingPage;
