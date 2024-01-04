import AboutFrontal from "@/app/components/AboutUs/AboutFrontal";
import SoftwareDigital from "@/app/components/SoftwareDevelopment/SoftwareDigital";
import React from "react";
import dynamic from "next/dynamic";
import MessageUsSection from "../../components/ReuserbleComponents/MessageUsSection";

const SoftwareDevelopment = () => {
  return (
    <div>
      <AboutFrontal data={"Software Development"} />
      <SoftwareDigital />
      <MessageUsSection />
    </div>
  );
};

export default SoftwareDevelopment;
