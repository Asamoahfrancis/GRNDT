import AboutFrontal from "@/app/components/AboutUs/AboutFrontal";
import AboutServices from "@/app/components/AboutUs/AboutServices";
import DigitalAgency from "@/app/components/AboutUs/DigitalAgency";
import MessageUsSection from "@/app/components/ReuserbleComponents/MessageUsSection";
import SmallZigzag from "@/app/components/ReuserbleComponents/SmallZigzag";
import Testimonies from "@/app/components/ReuserbleComponents/Testimonies";
import Trustedcustomers from "@/app/components/ReuserbleComponents/Trustedcustomers";
import React from "react";

const Aboutus = () => {
  return (
    <div>
      <AboutFrontal />
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
