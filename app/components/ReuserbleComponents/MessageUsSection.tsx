"use client";
import dynamic from "next/dynamic";
import MessageContent from "../../components/ReuserbleComponents/MessageContent";
const MessageImageContent = dynamic(
  () => import("../../components/ReuserbleComponents/MessageImageContent"),
  { ssr: false }
);
const MessageUsSection = () => {
  return (
    <div className="relative  md:h-[653px] ">
      <div className="max-w-[1444px] mx-auto">
        <MessageContent />
      </div>
      <MessageImageContent />
    </div>
  );
};

export default MessageUsSection;
