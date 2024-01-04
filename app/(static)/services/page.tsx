import AboutFrontal from "@/app/components/AboutUs/AboutFrontal";
import Testimonies from "@/app/components/ReuserbleComponents/Testimonies";
import Trustedcustomers from "@/app/components/ReuserbleComponents/Trustedcustomers";
import ServicesActualSection from "@/app/components/ServicesComponents/ServiceActualData";
import React from "react";
import dynamic from "next/dynamic";

const MessageUsSection = dynamic(
  () => import("../../components/ReuserbleComponents/MessageUsSection")
);
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
