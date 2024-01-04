import AboutFrontal from "@/app/components/AboutUs/AboutFrontal";
import UserExperience from "@/app/components/UserExperince/UserExperience";
import UserInterfaceContent from "@/app/components/UserInterface/UserInterfaceContent";
import React from "react";
import MessageUsSection from "../../components/ReuserbleComponents/MessageUsSection";

const UserInterface = () => {
  return (
    <div>
      <AboutFrontal data={"User Interface Design"} />
      <div className="my-10">
        <UserExperience picsource={"/userInter.png"} />
      </div>
      <UserInterfaceContent />
      <MessageUsSection />
    </div>
  );
};

export default UserInterface;
