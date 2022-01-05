// import { useEffect, useState } from "react";
import styled from "styled-components";

import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

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

const ConnectButton = styled(WalletDialogButton)``;

const LandingPage = () => {
  return (
    <>
      {/* 
      TODO List:
        - Add js functionality to NAV
        - Make NAV fixed
        - Make NAV mobile friendly
        - Fix styling on buttons
        - Convert everything to mobile friendly
        - Fix mint now button
        - Fix showcase slider
        - Insert correct zombie gif
        - Comic book video
        - Do something about roadmap
        - Replace logo with the spuds logo
      */}

      {/* Navbar */}

      <nav
        role="navigation"
        className="flex justify-center items-center m-4 h-16 text-white primary-font"
      >
        <div className="flex items-center mr-32">
          <img
            src="https://cdn2.iconfinder.com/data/icons/fruits-and-vegetables-25/85/potatoes_potato_vegetable_food-256.png"
            width="50"
            className="m-4"
            alt="logo"
          ></img>
          <button className="">LOGO</button>
        </div>

        <div className="px-4 cursor-pointer md:hidden">
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
        </div>
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
        <div className="p-4 card-bg primary-font">Spuds NFT Collection</div>
        <p className="mt-4 w-3/5 text-center">
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
        <ConnectButton>Mint Now</ConnectButton>
        <img src={chairImage} className="w-full" alt="logo"></img>
      </section>

      {/* Show Case */}

      <section id="showcase" className="flex flex-col items-center mt-32">
        <div className="p-4 card-bg primary-font">Show Case</div>

        {/* Show Case Slider */}

        <div className="w-3/4 flex overflow-x-auto">
          <div className="w-1/4 flex flex-col flex-none">
            <img src={spud1} className="p-4" alt="logo"></img>
            <img src={spud2} className="p-4" alt="logo"></img>
          </div>
          <div className="w-1/4 flex flex-col flex-none">
            <img src={spud3} className="p-4" alt="logo"></img>
            <img src={spud4} className="p-4" alt="logo"></img>
          </div>
          <div className="w-1/4 flex flex-col flex-none">
            <img src={spud5} className="p-4" alt="logo"></img>
            <img src={spud6} className="p-4" alt="logo"></img>
          </div>
          <div className="w-1/4 flex flex-col flex-none">
            <img src={spud7} className="p-4" alt="logo"></img>
            <img src={spud8} className="p-4" alt="logo"></img>
          </div>
          <div className="w-1/4 flex flex-col flex-none">
            <img src={spud9} className="p-4" alt="logo"></img>
            <img src={spud10} className="p-4" alt="logo"></img>
          </div>
          <div className="w-1/4 flex flex-col flex-none">
            <img src={spud11} className="p-4" alt="logo"></img>
            <img src={spud12} className="p-4" alt="logo"></img>
          </div>
        </div>
      </section>

      {/* Zombie */}

      <section id="zombie" className="w-full flex justify-center mt-32">
        <div className="flex w-3/4 items-center">
          <div className="flex flex-col items-start w-1/2">
            <div className="p-4 m-4 card-bg primary-font">ZOMBIE – Phase 2</div>

            <div className="flex items-start mb-4">
              <img src={zombieHand} className="h-20 m-4" alt="logo"></img>
              <div className="flex flex-col">
                <h2 className="primary-font">Title</h2>
                <p>
                  How could it be? Have our little companions have turned
                  against us? Or was it us who were against them all along? Has
                  mankind made Earth’s atmosphere too toxic for the spuds to
                  survive.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-4">
              <img src={nftLogo} className="h-20 m-4" alt="logo"></img>
              <div className="flex flex-col">
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
          <img src={chairImage} className="m-4 w-1/2" alt="logo"></img>
        </div>
      </section>

      {/* Comic Book */}

      <section id="comic" className="w-full flex justify-center mt-32">
        <div className="flex w-3/4 items-center">
          <img src={spud1} className="m-4 w-1/2" alt="logo"></img>
          <div className="flex flex-col items-start">
            <div className="p-4 m-4 card-bg primary-font">
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
        <div className="flex w-3/4 items-center">
          <div className="flex flex-col items-start">
            <div className="p-4 m-4 card-bg primary-font">
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
          <img src={concertImage} className="m-4 w-1/2" alt="logo"></img>
        </div>
      </section>

      {/* Roadmap */}

      <section id="roadmap" className="flex flex-col items-center mt-32">
        <div className="p-4 card-bg primary-font">Roadmap</div>

        <img src={roadmapImage} className="w-3/4 m-4" alt="logo"></img>
      </section>

      {/* Countdown */}

      <section id="countdown" className="flex flex-col items-center mt-32">
        <div className="p-4 card-bg primary-font">Countdown</div>
      </section>

      {/* FAQs */}

      <section id="faqs" className="flex flex-col items-center mt-32">
        <div className="p-4 card-bg primary-font mb-8">Frequent Questions</div>

        <div className="flex justify-center w-full">
          <div className="flex flex-wrap text-center w-3/4 justify-center">
            <div className="bg-blue-800 p-4 m-2 w-2/5 flex justify-between items-center">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>
              <img src={dropdown}></img>
            </div>
            <div className="bg-blue-800 p-4 m-2 w-2/5 flex justify-between items-center">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>
              <img src={dropdown}></img>
            </div>
            <div className="bg-blue-800 p-4 m-2 w-2/5 flex justify-between items-center">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>
              <img src={dropdown}></img>
            </div>
            <div className="bg-blue-800 p-4 m-2 w-2/5 flex justify-between items-center">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>
              <img src={dropdown}></img>
            </div>
            <div className="bg-blue-800 p-4 m-2 w-2/5 flex justify-between items-center">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>
              <img src={dropdown}></img>
            </div>
            <div className="bg-blue-800 p-4 m-2 w-2/5 flex justify-between items-center">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>
              <img src={dropdown}></img>
            </div>
            <div className="bg-blue-800 p-4 m-2 w-2/5 flex justify-between items-center">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>
              <img src={dropdown}></img>
            </div>
            <div className="bg-blue-800 p-4 m-2 w-2/5 flex justify-between items-center">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>
              <img src={dropdown}></img>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <div className="flex justify-center items-center mt-32 text-white primary-font">
        <div className="flex w-1/4 justify-center items-center">
          <img
            src="https://cdn2.iconfinder.com/data/icons/fruits-and-vegetables-25/85/potatoes_potato_vegetable_food-256.png"
            width="50"
            className="m-4"
            alt="logo"
          ></img>
          <button>LOGO</button>
        </div>

        <p className="w-1/4 text-center secondary-font">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
          maxime!
        </p>

        <div className="flex w-1/4 justify-center items-center">
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
