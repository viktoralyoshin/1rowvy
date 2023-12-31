import React, { useEffect, useState } from "react";
import logoImg from "/main.png";
import logImg from "/icons/Vector.svg";
import { IoClose } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isSign, setSign] = useState(false);

  useEffect(() => {
    if (location.pathname == "/login" || location.pathname == "/register") {
      setSign(true);
    } else {
      setSign(false);
    }
  }, [location]);

  const headerAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const menuAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const [isOpen, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="fixed top-4 w-full font-body z-20"
      >
        <motion.div
          variants={headerAnimation}
          className="hidden md:flex backdrop-blur-lg mx-auto max-w-[1200px] h-[70px] justify-between items-center bg-opacity-50 bg-[#6B7280] rounded-2xl shadow-2xl"
        >
          <img
            src={logoImg}
            alt=""
            className="w-[50px] h-[50px] rounded-2xl ml-4"
          />
          <div
            className={
              !isSign
                ? "flex gap-5 font-body text-[18px] text-white tracking-wide"
                : "mr-4 flex gap-5 font-body text-[18px] text-white tracking-wide"
            }
          >
            <Link
              to="/"
              className="cursor-pointer opacity-80 hover:opacity-100 ease-in-out duration-500"
            >
              Home
            </Link>
            <p className="cursor-pointer opacity-80 hover:opacity-100 ease-in-out duration-500">
              Catalog
            </p>
            <p className="cursor-pointer opacity-80 hover:opacity-100 ease-in-out duration-500">
              Soundkits
            </p>
            <p className="cursor-pointer opacity-80 hover:opacity-100 ease-in-out duration-500">
              Prices
            </p>
          </div>
          {!isSign && (
            <Link to="/login">
              <button className="bg-white bg-opacity-60 hover:bg-opacity-100 ease-in-out duration-500 rounded-xl px-[18px] py-[12px] font-semibold flex items-center gap-2 mr-4">
              Log In
              <img src={logImg}></img>
            </button>
            </Link>
            
          )}
        </motion.div>
      </motion.div>
      <div className="md:hidden fixed flex font-body z-20 w-full">
        <div className="absolute z-20 flex justify-between w-full backdrop-blur-lg h-[70px] bg-opacity-70 bg-[#000] items-center">
          <img
            src={logoImg}
            alt=""
            className="w-[50px] h-[50px] rounded-2xl ml-4"
          />
          <div onClick={handleMenu}>
            {!isOpen ? (
              <HiOutlineMenuAlt3 size={30} color="white" className="mr-4" />
            ) : (
              <IoClose size={30} color="white" className="mr-4" />
            )}
          </div>
        </div>
        <motion.div
          initial={menuAnimation.hidden}
          animate={isOpen ? menuAnimation.visible : menuAnimation.hidden}
          className={
            isOpen
              ? "md:hidden flex flex-col backdrop-blur-lg h-screen bg-opacity-70 bg-[#000] pt-4 pl-6 gap-5 w-full"
              : "hidden"
          }
        >
          <div className="flex flex-col gap-5 font-body text-[20px] text-white tracking-wide mt-[100px]">
            <Link
              to="/"
              className="cursor-pointer opacity-80 hover:opacity-100 ease-in-out duration-500"
            >
              Home
            </Link>
            <p className="cursor-pointer opacity-80 active:opacity-100 ease-in-out duration-500">
              Catalog
            </p>
            <p className="cursor-pointer opacity-80 active:opacity-100 ease-in-out duration-500">
              Soundkits
            </p>
            <p className="cursor-pointer opacity-80 active:opacity-100 ease-in-out duration-500">
              Prices
            </p>
            <p className="cursor-pointer opacity-80 active:opacity-100 ease-in-out duration-500">
              About
            </p>
          </div>
          {!isSign && (
            <Link to="/login">
              <button className="bg-white bg-opacity-60 active:bg-opacity-100 ease-in-out duration-500 rounded-xl px-[18px] py-[12px] font-semibold flex items-center mr-4 gap-2">
                Log In
                <img src={logImg}></img>
              </button>
            </Link>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Header;
