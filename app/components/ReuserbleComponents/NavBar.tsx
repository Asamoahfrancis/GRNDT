import React from "react";
import Image from "next/image";
import Link from "next/link";
import TemporaryDrawer from "./MobileNav";
const NavBar = () => {
  return (
    <div className="w-full sticky top-0 bg-white z-[100]">
      <div className="  max-w-[1444px] mx-auto   flex md:px-[50px] px-[20px] py-[10px] md:py-[18px] items-center justify-between">
        <Link href="/" className="hover:scale-90 duration-200">
          <Image
            src="/mainLogo.png"
            width={137}
            height={66}
            alt="Picture of the logo of grndt"
          />
        </Link>
        <TemporaryDrawer />
        <section className="hidden md:flex md:gap-6 lg:gap-0 md:[&>a]:p-1 lg:[&>a]:p-4 hover:[&>a]:text-darkGreen duration-300 text-lightRadientGreen [&>a]:tracking-widest [&>a]:rounded-md lg:[&>a]:mx-3">
          <Link href="/about-us">ABOUT US</Link>
          <Link href="/services">SERVICES </Link>
          <Link href="/portfolio">PORTFOLIO</Link>
          <Link href="/contact-us">CONTACT US</Link>
        </section>
      </div>
    </div>
  );
};

export default NavBar;
