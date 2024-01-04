import AboutFrontal from "@/app/components/AboutUs/AboutFrontal";
import AboutServices from "@/app/components/AboutUs/AboutServices";
import DigitalAgency from "@/app/components/AboutUs/DigitalAgency";
import Testimonies from "@/app/components/ReuserbleComponents/Testimonies";
import React from "react";
import dynamic from "next/dynamic";

const MessageUsSection = dynamic(
  () => import("../../components/ReuserbleComponents/MessageUsSection")
);
const Aboutus = () => {
  return (
    <div>
      <AboutFrontal data={"About Us"} />
      <DigitalAgency />
      <AboutServices />
      <div className="mb-20 -mt-20">
        <Testimonies />
      </div>
      <MessageUsSection />
    </div>
  );
};

export default Aboutus;
