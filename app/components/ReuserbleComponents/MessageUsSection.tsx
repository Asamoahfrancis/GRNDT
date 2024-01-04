"use client";
import Image from "next/image";
import MessageContent from "./MessageContent";
import React, { useEffect, useState } from "react";

const MessageUsSection = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  return (
    <div className="relative  md:h-[653px] ">
      <MessageContent />
      <Image
        src={`${windowWidth >= 768 ? "/nice.png " : "/thumbs.png"}`}
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

export default MessageUsSection;
