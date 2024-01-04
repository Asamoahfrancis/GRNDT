import AboutFrontal from "@/app/components/AboutUs/AboutFrontal";
import UserExperience from "@/app/components/UserExperince/UserExperience";
import UserExperienceContent from "@/app/components/UserExperince/UserExperienceContent";
import React from "react";
import MessageUsSection from "../../components/ReuserbleComponents/MessageUsSection";

const UserExperinces = () => {
  return (
    <div>
      <AboutFrontal data={"User Experience Design"} />
      <UserExperience picsource={"/userExp.png"} />
      <UserExperienceContent />
      <MessageUsSection />
    </div>
  );
};

export default UserExperinces;
