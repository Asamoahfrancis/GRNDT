import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="sticky top-0 bg-white z-[99999] flex px-[50px] py-[18px] items-center justify-between">
      <Link href="/" className="hover:scale-90 duration-200">
        <Image
          src="/mainLogo.png"
          width={137}
          height={63}
          alt="Picture of the logo of grndt"
        />
      </Link>
      <section className="  [&>a]:p-4 hover:[&>a]:text-darkGreen duration-300 text-lightRadientGreen [&>a]:tracking-widest   [&>a]:rounded-md [&>a]:mx-3">
        <Link href="/about-us">ABOUT US</Link>
        <Link href="/services">SERVICES </Link>
        <Link href="/portfolio">PORTFOLIO</Link>
        <Link href="/contact-us">CONTACT US</Link>
      </section>
    </div>
  );
};

export default NavBar;
