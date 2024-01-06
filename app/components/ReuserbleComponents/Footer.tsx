import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black">
      <div className="  max-w-[1444px] mx-auto   text-textColor ">
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
              <Link
                href="/software-development"
                className="hover:text-gray-500"
              >
                Software Development
              </Link>
              <Link href="/branding" className="hover:text-gray-200">
                Branding
              </Link>
              <Link href="/user-experience" className="hover:text-gray-200">
                User Experience Design
              </Link>
              <Link href="/user-interface" className="hover:text-gray-200">
                User Interface Design
              </Link>
              <Link href="/web-hosting" className="hover:text-gray-200">
                Web Hosting
              </Link>
            </div>
          </div>
          <div>
            <p className="text-white">QUICK LINKS</p>
            <div className="flex flex-col gap-1 mt-6">
              <Link href="/about-us" className="hover:text-gray-200">
                About Us
              </Link>
              <Link href="/services" className="hover:text-gray-200">
                Services
              </Link>
              <Link href="/portfolio" className="hover:text-gray-200">
                Portfolio
              </Link>
              <Link href="/contact-us" className="hover:text-gray-200">
                Contact Us
              </Link>
            </div>
          </div>
          <div>
            <p className="text-white">CONTACT US</p>
            <div className="flex flex-col gap-1 mt-6">
              <Link href="#" className="hover:text-gray-200">
                +233 54 323 5217
              </Link>
              <Link href="#" className="hover:text-gray-200">
                8th Link Road, Spintex, Accra.
              </Link>
              <Link href="#" className="hover:text-gray-200">
                info@grndt.com
              </Link>
              <Link href="#" className="hover:text-gray-200">
                Office Hours: 8:00AM - 5:00PM
              </Link>
            </div>
          </div>
        </section>
      </div>
      <section className="bg-[#232323] w-full">
        <p className="md:text-center text-[14px] text-left  text-white py-4 px-6">
          Copyright &copy; 2023 GRNDT. All Rights Reserved
        </p>
      </section>
    </div>
  );
};

export default Footer;
