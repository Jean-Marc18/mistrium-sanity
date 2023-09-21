import { FooterLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative flex-center flex-col gap-7 top-0 w-full text-black-100 py-7">
      <div className="flex-between max-md:flex-col gap-4 mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={100}
            height={40}
          />
        </Link>

        <ul className="flex-center relative gap-x-3 max-md:flex-col max-md:gap-y-3 md:gap-x-10">
          {FooterLinks.map((item) => (
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
              <div className="absolute inset-x-0 -bottom-1 h-[2px] bg-black-100 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out"/>
            </li>
          ))}
        </ul>

        <ul className="flex-center max-md:w-full gap-x-3 md:gap-x-10">
          <li>
            <Image
              src="/assets/images/facebook.svg"
              alt="facebook"
              height={20}
              width={20}
              className="block cursor-pointer object-contain"
            />
          </li>
          <li className="relative">
            <Image
              src="/assets/images/instagram.svg"
              alt="instagram"
              height={20}
              width={20}
              className="block cursor-pointer object-contain"
            />
          </li>
          <li>
            <Image
              src="/assets/images/twitter.svg"
              alt="twitter"
              height={20}
              width={20}
              className="block cursor-pointer object-contain"
            />
          </li>
        </ul>
      </div>
      <div className="py-5 flex items-center justify-center border-t-[1px] border-[#ADADAD] w-[90%]">
        <p className="text-center text-sm text-[#ADADAD]">
        Copyright © 2023. jeanmarckoffi.com
        </p>
      </div>
    </footer>
  )
}

export default Footer