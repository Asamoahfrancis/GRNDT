import AboutFrontal from "@/app/components/AboutUs/AboutFrontal";
import PortfolioSection from "@/app/components/Portfolio/PortfolioSection";
import MessageUsSection from "@/app/components/ReuserbleComponents/MessageUsSection";
import React from "react";

const Page = () => {
  return (
    <>
      <AboutFrontal data={"Porfolio"} />
      <PortfolioSection />
      <MessageUsSection />
    </>
  );
};

export default Page;
