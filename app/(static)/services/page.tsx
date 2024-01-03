import AboutFrontal from "@/app/components/AboutUs/AboutFrontal";
import DigitalAgency from "@/app/components/AboutUs/DigitalAgency";
import MessageUsSection from "@/app/components/ReuserbleComponents/MessageUsSection";
import ServicesSection from "@/app/components/ReuserbleComponents/ServicesSection";
import Testimonies from "@/app/components/ReuserbleComponents/Testimonies";
import Trustedcustomers from "@/app/components/ReuserbleComponents/Trustedcustomers";
import ServicesActualSection from "@/app/components/ServicesComponents/ServiceActualData";
import React from "react";

const Services = () => {
  return (
    <>
      <AboutFrontal data={"Services"} />
      <ServicesActualSection />
      <Trustedcustomers />

      <div className="mb-20 ">
        <Testimonies />
      </div>

      <MessageUsSection />
    </>
  );
};

export default Services;
