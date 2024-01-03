import React from "react";
import Image from "next/image";
import ConatctMessageContent from "./ContactMessageContent";
const ContactmessageSection = () => {
  return (
    <div className="relative  h-[653px] ">
      <ConatctMessageContent />
      <Image
        src="/nice.png"
        alt="Picture of the author"
        sizes="100vw"
        quality={100}
        fill
        style={{
          objectFit: "cover",
          zIndex: "-200",
        }}
      />
    </div>
  );
};

export default ContactmessageSection;
