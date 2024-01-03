import AboutFrontal from "@/app/components/AboutUs/AboutFrontal";
import ContactmessageSection from "@/app/components/ContactUs/ConatctMessage";

import React from "react";

const Page = () => {
  return (
    <>
      <AboutFrontal data={"Contact Us"} />
      <div className="mb-28">
        <ContactmessageSection />
      </div>
    </>
  );
};

export default Page;
