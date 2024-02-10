import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className="flex items-center justify-between px-10 py-2 bg-shadow">
      <img
        className="h-16"
        src="https://www.gingermediagroup.com/wp-content/uploads/2022/10/gmg-logo.png"
        alt="logo"
      />
      <ul className="flex gap-5">
        <li className="bg-[#FF6702] px-2 py-1 font-bold text-white rounded-sm cursor-pointer hover:bg-[#e76854]">
          <Link to="/">Home</Link>
        </li>
        <li className="bg-[#FF6702] px-2 py-1 font-bold text-white rounded-sm cursor-pointer hover:bg-[#e76854]">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
