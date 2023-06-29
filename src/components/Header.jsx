import React from "react";
import logoImg from "/main.png";
import logImg from "/icons/Vector.svg"

const Header = () => {
  return (
    <div className="fixed top-4 w-full">
      <div className="flex backdrop-blur-xl mx-auto max-w-[1200px] h-[80px] justify-between items-center bg-opacity-60 bg-[#6B7280] rounded-2xl shadow-2xl">
        <img src={logoImg} alt="" className="w-[60px] h-[60px] rounded-2xl ml-4" />
        <button className="bg-white rounded-xl px-[21px] py-[14px] font-semibold flex items-center mr-4 gap-2">Log In<img src={logImg}></img></button>
      </div>
    </div>
  );
};

export default Header;
