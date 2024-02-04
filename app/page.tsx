import React from "react";
import Portrat from "../public/Avatar.png";
import Image from "next/image";
import { AiFillCode } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

const page = ({}) => {
  return (
    <div className="flex flex-col">
      <nav>
        <div className="h-[10vh] w-full flex flex-row justify-between ">
          <a href="/" className="w-[8vh] self-center h-[8vh]">
            <AiFillCode className="w-[8vh] mx-2 text-blue-600 h-[8vh]" />
          </a>
          <button>
            <RxHamburgerMenu className="w-[4vh] self-center m-4 h-[4vh] text-slate-700" />
          </button>
        </div>
      </nav>
      <section>
        <div className="w-full text-black h-[90vh] bg-white flex flex-col ">
          <h1 className="text-4xl mt-[20vh] mb-4 self-center font-extrabold text-center">
            Fullstack Developer
          </h1>
          <p className="text-center text-xl px-10 my-4">
            I design and code exceptional things, and i love the process.
          </p>
          <Image
            src={Portrat}
            className=" w-[25vh] h-[25vh] mt-[10vh] mx-auto bg-blue-600 rounded-full "
            alt="Portrait of me"
          ></Image>
        </div>
      </section>
      <div className="bg-blue-600 w-full h-[120vh]">
        <h2 className="text-white text-3xl text-center pt-6">Hi, im Shawn</h2>
        <p className="text-white text-xl p-6 text-center">
          Hey there! I'm a web developer on a journey to master all things Web.
          My passion for coding began when i was searching the web and
          accidentally clicked open inspect element. Since then, I've been
          constantly been learning and growing, eager to tackle new challenges
          and build amazing things for the web. I'm always looking to expand my
          skillset. When I'm not coding, I enjoy Playing Video Games and hanging
          out with my friends and family. I'm excited to see what the future
          holds in the world of web development, and I'm eager to be a part of
          it.
        </p>
        <div className="bg-white rounded-3xl m-4 flex flex-col">
          <div className="bg white text-center rounded-3xl border-2 rounded-b-none h-full w-full">
            <h3 className="m-4 text-2xl mt-8 ">Front End</h3>
            <p className="my-4 text-blue-600">
              Technologies im experienced with:
            </p>
            <ul>
              <li>React</li>
              <li>Next Js</li>
              <li>Tailwind</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <p className="my-4 text-blue-600">Design tools i use:</p>
            <ul className="mb-8">
              <li>Figma</li>
              <li>Pen and Paper</li>
            </ul>
          </div>
          <div className="bg white text-center border-2 h-full w-full">
            <h3 className="m-4 text-2xl mt-8 ">Backend Development</h3>
            <p className="my-4 text-blue-600">
              Technologies im experienced with:
            </p>
            <ul>
              <li>Node Js</li>
              <li>Express Js</li>
              <li>Passport</li>
              <li>MongoDB</li>
            </ul>
            <p className="my-4 text-blue-600">Tools i use:</p>
            <ul className="mb-8">
              <li>MongoDB Atlas</li>
              <li>Pen and Paper</li>
            </ul>
          </div>
          <div className="bg-white text-center rounded-3xl border-2 rounded-t-none h-full w-full">
            <h3 className="m-4 text-2xl mt-8 ">Design</h3>
            <p className="my-4 text-blue-600">What im experienced with</p>
            <ul className="">
              <li>Responsivness</li>
              <li>Intergration</li>
            </ul>
            <p className="my-4 text-blue-600">Design tools i use</p>
            <ul className="mb-8">
              <li>Figma</li>
              <li>Pen and Paper</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-xl text-center">Projects</h4>
          <p className="text-center py-4">
            Here are a few projects ive worked on
          </p>
        </div>
        <a
          className="underline text-blue-400 hover:text-blue-600"
          href="https://mattfarley.ca/"
        >
          mattfarley.ca inspiration
        </a>
        footer
        <div></div>
      </div>
    </div>
  );
};

export default page;
