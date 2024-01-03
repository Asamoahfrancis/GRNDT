import React from "react";
import Image from "next/image";
const UserExperience = ({ picsource }: { picsource: string }) => {
  return (
    <section className=" flex justify-center p-20 ">
      <div className="relative w-[70%] h-[387px] ">
        <Image
          src={picsource}
          alt="Picture of the author"
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default UserExperience;
