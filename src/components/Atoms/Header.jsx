"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import pic from "../../app/assets/Images/images.png";
import Image from "next/image";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="bg-[#ffffff] px-[15px] h-[45px] flex items-center justify-between border-b-1 font-title">
      <div className="w-[699px] flex gap-16 items-center max-md:justify-between">
        <Image src={pic} alt="pic" className="h[30px] w-[30px]" />
        <nav className="flex justify-center items-center gap-15 max-md:hidden">
          <a
            href=""
            className="font-medium transition-colors text-muted-foreground h-[18px] text-center"
          >
            PLAYGROUND
          </a>
          <a
            href=""
            className="font-medium transition-colors text-muted-foreground "
          >
            DASHBOARD
          </a>
          <a
            href=""
            className="font-medium transition-colors text-muted-foreground"
          >
            AUTH
          </a>
          <a
            href=""
            className="font-medium transition-colors text-muted-foreground"
          >
            SETTINGS
          </a>
          <a
            href=""
            className="font-medium transition-colors text-muted-foreground"
          >
            DOCS
          </a>
        </nav>
        <div className="flex gap-3">
          <Button className="border-1 bg-white text-black">
            <FaSignInAlt />
          </Button>
          <Button className="border-1 bg-white text-black">
            <FaSignOutAlt />
          </Button>
        </div>

        <div className="flex w-[214px] gap-2 items-center max-md:hidden">
          <Button className="h-[30px] w-[104px] whitespace-nowrap text-sm font-medium bg-[#ffffff] p-[0px 11px] rounded-none text-[#000000] border-1 hover:bg-amber-50 ">
            SIGN IN
          </Button>
          <Button className="h-[30px] w-[104px] whitespace-nowrap text-sm font-medium p-[0px 11px] bg-[#000000] border-1 rounded-none">
            SIGN UP
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

{
  /* <Button
          onClick={togglePopup}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className=" hidden relative
           max-md:flex
            h-[30px] w-[30px]
             rounded-[7px]
              border-1
               bg-amber-700
               z-20
               items-center
               justify-center"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </Button>
      </div>
      {isOpen && (
        <nav
          ref={menuRef}
          className="h-[200px] z-10 w-full fixed bg-amber-50 border-1 left-0 top-0 flex justify-center items-center"
          aria-hidden={!isOpen}
        >
          <div className="flex flex-col items-center gap-4">
            <a
              href=""
              className="font-medium text-muted-foreground text-l hover:text-amber-700 transition hover:border-b-2 hover:border-amber-700 duration-200"
            >
              PLAYGROUND
            </a>
            <a
              href=""
              className="font-medium text-muted-foreground text-l hover:text-amber-700 transition hover:border-b-2 hover:border-amber-700 duration-200"
            >
              DASHBOARD
            </a>
            <a
              href=""
              className="font-medium text-muted-foreground text-l hover:text-amber-700 transition  hover:border-b-2 hover:border-amber-700 duration-200"
            >
              AUTH
            </a>
            <a
              href=""
              className="font-medium text-muted-foreground text-l hover:text-amber-700 transition hover:border-b-2 hover:border-amber-700 duration-200"
            >
              SETTINGS
            </a>
            <a
              href=""
              className="font-medium text-muted-foreground text-l hover:text-amber-700 hover:border-b-2 hover:border-amber-700 transition duration-200"
            >
              DOCS
            </a>
          </div>
        </nav>
      )} */
}
