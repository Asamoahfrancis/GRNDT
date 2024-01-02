import React from "react";
import Image from "next/image";
const DigitalAgency = () => {
  return (
    <div>
      <section className="text-center mt-20">
        <p className="text-sm text-textColor">ABOUT OUR COMPANY</p>
        <p className="text-[30px] text-lightRadientGreen">
          We Are A Digital Agency
        </p>
      </section>
      <section className="grid grid-cols-2 px-[50px] mt-20">
        <div>
          <p className="mt-8 text-lightRadientGreen">About Us</p>
          <p className=" my-6 text-textColor ">
            Founded in 2020 amidst the challenges of the Covid-19 pandemic,
            <span className="text-lightRadientGreen">GRNDT</span> has thrived
            over the years, developing digital solutions seamlessly woven into
            the complex fabric of the global economy. Recognizing the impact of
            widespread job losses, we initiated a mission to assist companies
            and startups in integrating technology into their business
            processes, fostering heightened productivity. Our dedication extends
            to accelerating the adoption of software, thereby improving the
            efficiency and profitability of companies and organizations. We are
            committed to promptly and professionally meeting their software
            requirements.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/aboutwoman.png"
            alt="Picture of the author"
            sizes="100vw"
            style={{
              width: "60%",
              height: "auto",
            }}
            width={500}
            height={300}
          />
        </div>
      </section>
      <section className="px-[50px] my-10 ">
        <p className="text-center  text-lightRadientGreen">Our Vision</p>
        <div className="grid place-items-center">
          <p className="text-center w-[70%]">
            <span className=" text-lightRadientGreen">GRNDT</span> aspires to
            emerge as a leading technology and design firm, earning the trust of
            companies within and beyond Ghana. Our goal is to establish a
            reputation as a company that consistently delivers superior
            technology solutions to our valued clients.
          </p>
        </div>
      </section>
      <section className="px-[50px] my-10 ">
        <p className="text-center  text-lightRadientGreen">Our Mission</p>
        <div className="grid place-items-center">
          <p className="text-center w-[70%]">
            <span className=" text-lightRadientGreen">GRNDT</span> At GRNDT, our
            mission is to develop software solutions that have a direct impact
            on our economy. We are dedicated to enhancing the efficiency and
            effectiveness of companies and organizations by providing
            professional, user-friendly, visually appealing, and customized web
            and mobile platforms.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DigitalAgency;
