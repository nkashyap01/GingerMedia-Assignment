import React from "react";
import { IoIosHeart } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-1 text-[#373737] h-16 text-base font-semibold border-t-2 bg-shadow ">
      <div className={`flex items-center relative gap-1 `}>
        <FaGithubSquare className="text-xl" />
        <FaInstagramSquare className="text-xl" />
        <FaLinkedin className="text-xl" />
      </div>
      <h3 className="">
        || Developed by <IoIosHeart className="inline text-red-600" /> Neha
        Kumari
      </h3>
    </div>
  );
};

export default Footer;
