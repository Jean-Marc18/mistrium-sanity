import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-white-100 text-black-100 py-7">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={100}
            height={40}
          />
        </Link>

        <Image
          src="/assets/images/hamburger-menu.svg"
          alt="hamburger menu"
          height={30}
          width={30}
          className="block md:hidden cursor-pointer"
        />

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
            <Image
              src="/assets/images/search.png"
              alt="search"
              height={20}
              width={20}
              className="block cursor-pointer"
            />
          </li>
          <li className="relative">
            <Image
              src="/assets/images/panier.png"
              alt="panier"
              height={20}
              width={20}
              className="block cursor-pointer"
            />
            <div className="absolute bottom-2 left-2 bg-red-500 p-2 rounded-full text-center w-1 h-1 flex items-center justify-center">
              <span className="text-xs text-white-100">2</span>
            </div>
          </li>
          <li>
            <Image
              src="/assets/images/person.png"
              alt="person"
              height={20}
              width={20}
              className="block cursor-pointer"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
