"use client";
import React, { useState, useEffect, useRef } from "react";
import pic from "../../app/assets/Images/capy.webp";
import Image from "next/image";
import { Button } from "../ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the menu itself

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    // Check if the click is outside the menu and the button
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="bg-[#ffffff] px-[15px] h-[45px] flex items-center justify-between border-b-1 font-title">
      <div className="w-[699px] flex gap-16 items-center">
        <Image src={pic} alt="pic" className="h[24px] w-[24px]" />
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
      </div>
      <div className="flex w-[214px] gap-2 items-center max-md:hidden">
        <Button className="h-[30px] w-[104px] whitespace-nowrap text-sm font-medium bg-[#ffffff] p-[0px 11px] rounded-none text-[#000000] border-1 hover:bg-[#ffffff]">
          SIGN IN
        </Button>
        <Button className="h-[30px] w-[104px] whitespace-nowrap text-sm font-medium p-[0px 11px] bg-[#6D1CCF] border-1 rounded-none hover:bg-[#6d1ccf]">
          SIGN UP
        </Button>
      </div>
    </div>
  );
};

export default Header;
