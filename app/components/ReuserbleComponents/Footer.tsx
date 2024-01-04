import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black    text-textColor ">
      <section className="grid grid-cols-1 md:grid-cols-4 md:px-[50px] px-[20px] py-6 text-base md:text-sm gap-6">
        <div>
          <p className="text-white">WE ARE GRNDT</p>
          <p className="mt-6">
            We are a collective of designers and developers committed to
            constructing and investing in software solutions intricately woven
            into the core of our economy.
          </p>
        </div>
        <div>
          <p className="text-white">OUR SERVICES</p>
          <div className="flex flex-col gap-1 mt-6">
            <Link href="#">Software Development</Link>
            <Link href="#">Branding</Link>
            <Link href="#">User Experience Design</Link>
            <Link href="#">User Interface Design</Link>
            <Link href="#">Web Hosting</Link>
          </div>
        </div>
        <div>
          <p className="text-white">QUICK LINKS</p>
          <div className="flex flex-col gap-1 mt-6">
            <Link href="#">About Us</Link>
            <Link href="#">Services</Link>
            <Link href="#">Portfolio</Link>
            <Link href="#">Contact Us</Link>
          </div>
        </div>
        <div>
          <p className="text-white">CONTACT US</p>
          <div className="flex flex-col gap-1 mt-6">
            <Link href="#">+233 54 323 5217</Link>
            <Link href="#">8th Link Road, Spintex, Accra.</Link>
            <Link href="#">info@grndt.com</Link>
            <Link href="#">Office Hours: 8:00AM - 5:00PM</Link>
          </div>
        </div>
      </section>
      <section>
        <p className="md:text-center text-[14px] text-left bg-[#232323] text-white py-4 px-6">
          Copyright &copy; 2023 GRNDT. All Rights Reserved
        </p>
      </section>
    </div>
  );
};

export default Footer;
