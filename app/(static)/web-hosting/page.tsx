import AboutFrontal from "@/app/components/AboutUs/AboutFrontal";
import UserExperience from "@/app/components/UserExperince/UserExperience";
import WebHostingContent from "@/app/components/WebHosting/WebHostingContent";
import React from "react";
import MessageUsSection from "../../components/ReuserbleComponents/MessageUsSection";

const WebHosting = () => {
  return (
    <div>
      <AboutFrontal data={"Web Hosting"} />
      <div className="my-10 md:my-0">
        <UserExperience picsource={"/webhosting.png"} />
      </div>
      <WebHostingContent />
      <MessageUsSection />
    </div>
  );
};

export default WebHosting;
