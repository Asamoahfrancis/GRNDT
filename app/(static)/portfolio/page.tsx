import AboutFrontal from "@/app/components/AboutUs/AboutFrontal";
import PortfolioSection from "@/app/components/Portfolio/PortfolioSection";
import React from "react";
import dynamic from "next/dynamic";

const MessageUsSection = dynamic(
  () => import("../../components/ReuserbleComponents/MessageUsSection")
);
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
