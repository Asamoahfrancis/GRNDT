import React, { useState, useEffect } from "react";
import Image from "next/image";
import useWidth from "@/app/hook/useWidth";

const MessageImageContent = () => {
  const [width] = useWidth(0);

  return (
    <>
      {width >= 768 ? (
        <Image
          src="/nice.png"
          alt="Picture of the author"
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
            zIndex: "-200",
          }}
        />
      ) : (
        <Image
          src="/thumbs.png"
          alt="Picture of the author"
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
            zIndex: "-200",
          }}
        />
      )}
    </>
  );
};

export default MessageImageContent;
