"use client";

import React, { useState } from "react";
import Link from "next/link";
import { links } from "@/lib/data";

const Header = () => {

  return (
    <header className="z-[999] relative">
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[7rem] w-full rounded-none border border-white/70 bg-white bg-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[3rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full flex justify-center p-2 dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
      >
        <ul className="w-[22rem] sm:w-full h-full flex flex-wrap sm:flex-nowrap justify-center gap-y-1 gap-x-3 sm:gap-0 sm:justify-between items-center ">
          {links.map((link) => (
            <li
              key={link.hash}
              className="flex justify-center items-center rounded-3xl first:bg-gray-100 border border-white/30"
            >
              <Link
                href={link.hash}
                className="py-1 px-3 flex justify-center items-center rounded-3xl relative"

                onClick={() => {setActiveSection(link.name); setTimeOfLastClick(Date.now())}}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
