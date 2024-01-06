"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const DigitalAgency = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  return (
    <div className=" w-full">
      <div className=" text-textColor max-w-[1444px] mx-auto ">
        <section className="text-center mt-20">
          <p className="text-sm text-textColor text-[20px] my-4 md:my-0 tracking-widest">
            ABOUT OUR COMPANY
          </p>
          <p className="md:text-[30px] text-[25px] text-lightRadientGreen">
            We Are A Digital Agency
          </p>
        </section>
        <section className="grid grid-col-1 md:grid-cols-2 md:px-[50px] mt-20">
          <div className="order-last md:order-first px-[10px]">
            <p className="mt-8 text-lightRadientGreen text-2xl px-2 md:px-0">
              About Us
            </p>
            <p className=" my-6 text-textColor px-2 md:px-0">
              Founded in 2020 amidst the challenges of the Covid-19 pandemic,
              <span className="text-lightRadientGreen">GRNDT</span> has thrived
              over the years, developing digital solutions seamlessly woven into
              the complex fabric of the global economy. Recognizing the impact
              of widespread job losses, we initiated a mission to assist
              companies and startups in integrating technology into their
              business processes, fostering heightened productivity. Our
              dedication extends to accelerating the adoption of software,
              thereby improving the efficiency and profitability of companies
              and organizations. We are committed to promptly and professionally
              meeting their software requirements.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/aboutwoman.png"
              alt="Picture of the author"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                ...(windowWidth >= 768 && { width: "60%" }),
              }}
              width={500}
              height={300}
            />
          </div>
        </section>
        <section className="md:px-[50px] my-10 ">
          <p className="text-center  text-lightRadientGreen">Our Vision</p>
          <div className="grid place-items-center">
            <p className="text-center md:w-[70%] px-2 md:px-0">
              <span className=" text-lightRadientGreen">GRNDT</span> aspires to
              emerge as a leading technology and design firm, earning the trust
              of companies within and beyond Ghana. Our goal is to establish a
              reputation as a company that consistently delivers superior
              technology solutions to our valued clients.
            </p>
          </div>
        </section>
        <section className="md:px-[50px] my-10 ">
          <p className="text-center  text-lightRadientGreen">Our Mission</p>
          <div className="grid place-items-center">
            <p className="text-center md:w-[70%] px-2 md:px-0">
              <span className=" text-lightRadientGreen">GRNDT</span> At GRNDT,
              our mission is to develop software solutions that have a direct
              impact on our economy. We are dedicated to enhancing the
              efficiency and effectiveness of companies and organizations by
              providing professional, user-friendly, visually appealing, and
              customized web and mobile platforms.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DigitalAgency;
