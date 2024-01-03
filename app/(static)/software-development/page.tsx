import AboutFrontal from "@/app/components/AboutUs/AboutFrontal";
import MessageUsSection from "@/app/components/ReuserbleComponents/MessageUsSection";
import SoftwareDigital from "@/app/components/SoftwareDevelopment/SoftwareDigital";
import React from "react";

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
