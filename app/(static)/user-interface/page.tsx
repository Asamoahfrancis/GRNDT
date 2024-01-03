import AboutFrontal from "@/app/components/AboutUs/AboutFrontal";
import MessageUsSection from "@/app/components/ReuserbleComponents/MessageUsSection";
import UserExperience from "@/app/components/UserExperince/UserExperience";
import UserInterfaceContent from "@/app/components/UserInterface/UserInterfaceContent";
import React from "react";

const UserInterface = () => {
  return (
    <div>
      <AboutFrontal data={"User Interface Design"} />
      <UserExperience picsource={"/userInter.png"} />
      <UserInterfaceContent />
      <MessageUsSection />
    </div>
  );
};

export default UserInterface;
