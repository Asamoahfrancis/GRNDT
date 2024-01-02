import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <section className="grid grid-cols-4 px-[50px] py-6 text-sm gap-6">
        <div>
          <p>WE ARE GRNDT</p>
          <p>
            We are a collective of designers and developers committed to
            constructing and investing in software solutions intricately woven
            into the core of our economy.
          </p>
        </div>
        <div>
          <p>OUR SERVICES</p>
          <div>
            <Link href="#">Software Development</Link>
            <Link href="#">Software Development</Link>
            <Link href="#">Software Development</Link>
            <Link href="#">Software Development</Link>
            <Link href="#">Software Development</Link>
            <Link href="#">Software Development</Link>
          </div>
        </div>
        <div>
          <p>OUR SERVICES</p>
          <div>
            <Link href="#">Software Development</Link>
            <Link href="#">Software Development</Link>
            <Link href="#">Software Development</Link>
            <Link href="#">Software Development</Link>
            <Link href="#">Software Development</Link>
            <Link href="#">Software Development</Link>
          </div>
        </div>
        <div>
          <p>OUR SERVICES</p>
          <div>
            <Link href="#">Software Development</Link>
            <Link href="#">Software Development</Link>
            <Link href="#">Software Development</Link>
            <Link href="#">Software Development</Link>
            <Link href="#">Software Development</Link>
            <Link href="#">Software Development</Link>
          </div>
        </div>
      </section>
      <section>
        <p className="text-center bg-[#232323] text-white py-4 px-6">
          Copyright &copy; 2023 GRNDT. All Rights Reserved
        </p>
      </section>
    </div>
  );
};

export default Footer;
