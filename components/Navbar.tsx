"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { NavLinks } from "@/constants";
import { Button } from "./ui/button";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex-center fixed top-0 z-50 w-full text-black-100 py-7">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={100}
            height={40}
          />
        </Link>

        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          {NavLinks.map((item) => (
            <li
              key={item.key}
              className="relative group body-text text-black-100 !font-medium"
            >
              <Link
                href={item.href}
                className="group-hover:text-opacity-100 group-hover:text-black-100 transition duration-300 ease-in-out"
              >
                {item.text}
              </Link>
              <div className="absolute inset-x-0 -bottom-1 h-[2px] bg-black-100 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out" />
            </li>
          ))}
        </ul>

        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li>
            <Dialog>
              <DialogTrigger>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="p-0 m-0"
                >
                  <Image
                    src="/assets/images/search.png"
                    alt="search"
                    height={20}
                    width={20}
                    className="block cursor-pointer"
                  />
                </Button>
              </DialogTrigger>
              <DialogContent className="p-12">
                <Input />
              </DialogContent>
            </Dialog>
          </li>
          <li className="relative cursor-pointer">
            <Link href="/">
              <Image
                src="/assets/images/panier.png"
                alt="panier"
                height={20}
                width={20}
                className="block cursor-pointer"
              />
            </Link>
            <div className="absolute bottom-2 left-2 bg-red-400 p-2 rounded-full text-center w-1 h-1 flex items-center justify-center">
              <span className="text-xs text-white">2</span>
            </div>
          </li>
          <li>
            <Link href="/">
              <Image
                src="/assets/images/person.png"
                alt="person"
                height={20}
                width={20}
                className="block cursor-pointer"
              />
            </Link>
          </li>
        </ul>

        <div className="block md:hidden cursor-pointer">
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/images/hamburger-menu.svg"
                alt="hamburger menu"
                height={30}
                width={30}
              />
            </SheetTrigger>
            <SheetContent className="bg-[#ffffffd0] outline-none border-none pt-20 flex-center flex-col">
              <ul className="flex-center flex-col gap-4">
                {NavLinks.map((item) => (
                  <li
                    key={item.key}
                    className="relative group body-text text-black-100 !font-medium"
                  >
                    <Link
                      href={item.href}
                      className="group-hover:text-opacity-100 group-hover:text-black-100 transition duration-300 ease-in-out"
                      onClick={handleClick}
                    >
                      {item.text}
                    </Link>
                    <div className="absolute inset-x-0 -bottom-1 h-[2px] bg-black-100 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out" />
                  </li>
                ))}
              </ul>

              <hr className="my-10 w-full" />

              <ul className="flex-center gap-7">
                <li>
                  <Dialog>
                    <DialogTrigger>
                      <Button variant="ghost" size="icon" className="p-0 m-0">
                        <Image
                          src="/assets/images/search.png"
                          alt="search"
                          height={20}
                          width={20}
                          className="block cursor-pointer"
                        />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="absolute top-28 p-12">
                      <Input />
                    </DialogContent>
                  </Dialog>
                </li>
                <li className="relative cursor-pointer">
                  <Link href="/">
                    <Image
                      src="/assets/images/panier.png"
                      alt="panier"
                      height={20}
                      width={20}
                      className="block cursor-pointer"
                      onClick={handleClick}
                    />
                  </Link>
                  <div className="absolute bottom-2 left-2 bg-red-400 p-2 rounded-full text-center w-1 h-1 flex items-center justify-center">
                    <span className="text-xs text-white">2</span>
                  </div>
                </li>
                <li>
                  <Link href="/">
                    <Image
                      src="/assets/images/person.png"
                      alt="person"
                      height={20}
                      width={20}
                      className="block cursor-pointer"
                      onClick={handleClick}
                    />
                  </Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
