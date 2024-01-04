import AboutFrontal from "@/app/components/AboutUs/AboutFrontal";
import BrandingContent from "@/app/components/BrandingContent/BrandingContent";
import UserExperience from "@/app/components/UserExperince/UserExperience";
import React from "react";
import MessageUsSection from "../../components/ReuserbleComponents/MessageUsSection";

const Branding = () => {
  return (
    <div>
      <AboutFrontal data={"Branding"} />
      <div className="my-10 md:my-0">
        <UserExperience picsource={"/Branding.png"} />
      </div>
      <BrandingContent />
      <MessageUsSection />
    </div>
  );
};

export default Branding;
