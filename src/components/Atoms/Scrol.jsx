"use client";
import React, { useState, useEffect, useRef } from "react";

import Image from "next/image";

import pic from "../../app/assets/Images/capy.webp";

import { Button } from "../ui/button";

import { Card } from "../ui/card";

const Scroll = () => {
  return (
    <div className="flex flex-col w-full gap-2 overflow-y-scroll max-h-[400px]">
      {/* Landing Content */}
      <div className="min-h-[370px] w-full border-1 flex gap-4 justify-center items-center flex-col">
        <Image src={pic} alt="alt" className="h-[150px] w-[150px]" />
        <p className="text-[#98969c] text-[19px]">WELCOME TO SCRAPYBARA</p>
        <Button className="w-[240px] h-[37px] bg-[#6d1ccf] flex justify-center items-center rounded-none hover:bg-[#6d1ccf]">
          SIGN UP TO START
        </Button>
      </div>

      {/* Card Section (Target) */}
      <Card className="w-full h-[150px] border-1 rounded-none bg-[#ffffff] p-0 flex flex-col">
        <div className="w-[full] h-[45px] border-b-1 p-2 max-sm:text-[10px] text-nowrap  flex justify-between items-center">
          <p>SYSTEM PROMT</p>
          <div className="w-[225px] h-[30px] flex justify-center items-center gap-2">
            <Button className="h-[30px] w-[138px] border-1 bg-[#ffffff] rounded-none text-[#6d1ccf] text-sm font-medium hover:bg-[#ffffff]">
              RECOMMENDED
            </Button>
            <Button className="h-[30px] w-[78px] border-1 bg-[#ffffff] rounded-none text-[#000000] text-sm font-medium hover:bg-[#ffffff] max-sm:max-w-[50px]">
              COPY
            </Button>
          </div>
        </div>
        <div className="w-[full] flex p-4 text-sm flex-col gap-3 overflow-hidden overflow-y-scroll">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            eligendi? Adipisci autem, mollitia repudiandae, iure modi totam vel
            laboriosam placeat explicabo numquam provident cumque blanditiis
            architecto, veniam inventore! Nesciunt, vel.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sed
            laudantium dolorum asperiores assumenda minus natus exercitationem.
            Sapiente rem sunt in itaque natus error eos, ab explicabo illum a
            amet?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            officia dignissimos, neque odit, nisi in dolor, soluta dolores non
            aut amet reiciendis quod commodi accusamus fuga. Atque laboriosam
            omnis cupiditate?
          </p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iure
          dignissimos qui, molestiae, veniam doloremque tenetur, cupiditate
          totam reiciendis necessitatibus placeat rem explicabo sunt
          perspiciatis consequatur provident ut aspernatur? Laborum!
        </div>
      </Card>
    </div>
  );
};

export default Scroll;
