import AboutFrontal from "@/app/components/AboutUs/AboutFrontal";
import MessageUsSection from "@/app/components/ReuserbleComponents/MessageUsSection";
import UserExperience from "@/app/components/UserExperince/UserExperience";
import UserInterfaceContent from "@/app/components/UserInterface/UserInterfaceContent";
import WebHostingContent from "@/app/components/WebHosting/WebHostingContent";
import React from "react";

const WebHosting = () => {
  return (
    <div>
      <AboutFrontal data={"Web Hosting"} />
      <UserExperience picsource={"/userInter.png"} />
      <WebHostingContent />
      <MessageUsSection />
    </div>
  );
};

export default WebHosting;
