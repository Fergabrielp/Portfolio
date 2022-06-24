import React from "react";
import image from "../assets/cv.png";
import { GoLocation, GoMail } from "react-icons/go";
import { RiPhoneLine } from "react-icons/ri";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import cv from "../assets/CV.pdf";

const PersonalInfo = () => {
  return (
    <>
      <div className="container p-1">
        <img
          src={image}
          alt="Profile Image"
          className="rounded-full mx-auto w-3/6 shadow-md shadow-pink-500/50"
        />
        <p className="text-center text-3xl font-bold my-2">
          Fernando <span className=" text-pink-500/50">Pérez</span>{" "}
        </p>
        <p className="text-center text-xl font-bold mb-2">
          <span className=" text-pink-500/50">Software</span> Developer
        </p>

        <div className="mb-8 text-center rounded-lg p-2 shadow-md shadow-pink-500/50">
          <p className="flex flex-wrap p-2 font-medium">
            <GoLocation className="text-pink-500/50 text-2xl" />
            <p className="px-2">Córdoba, Argentina</p>
          </p>
          <p className="flex p-2 font-medium">
            <GoMail className="text-pink-500/50 text-2xl" />{" "}
            <p className="px-2">perezfernando95@gmail.com</p>
          </p>
          <p className="flex flex-wrap p-2 font-medium">
            <RiPhoneLine className="text-pink-500/50 text-2xl" />
            <p className="px-2">+54 351-2179495</p>
          </p>
        </div>

        <div className="flex justify-center align-middle">
          <button className="mb-8 rounded-lg shadow-md shadow-gray-500 bg-pink-500/50 text-2xl py-2 px-4 font-bold">
            <a href={cv} download={cv}>
              Download Resume
            </a>
          </button>
        </div>
        <div className="mb-2 p-2 text-center shadow-md shadow-pink-500/50 flex justify-around">
          <a href="https://github.com/Fergabrielp" target="_blank">
            <AiFillGithub className="text-pink-500/50 text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/fergabrielp/" target="_blank">
            <AiFillLinkedin className="text-pink-500/50 text-2xl" />
          </a>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
