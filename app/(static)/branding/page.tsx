import AboutFrontal from "@/app/components/AboutUs/AboutFrontal";
import BrandingContent from "@/app/components/BrandingContent/BrandingContent";
import MessageUsSection from "@/app/components/ReuserbleComponents/MessageUsSection";
import UserExperience from "@/app/components/UserExperince/UserExperience";
import UserInterfaceContent from "@/app/components/UserInterface/UserInterfaceContent";
import React from "react";

const Branding = () => {
  return (
    <div>
      <AboutFrontal data={"Branding"} />
      <UserExperience picsource={"/userInter.png"} />
      <BrandingContent />
      <MessageUsSection />
    </div>
  );
};

export default Branding;
