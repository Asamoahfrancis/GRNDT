import React from "react";
import Image from "next/image";
const UserExperience = ({ picsource }: { picsource: string }) => {
  return (
    <section className=" flex justify-center md:p-20 ">
      <div className="relative md:w-[70%] w-[95%]  md:h-[387px] h-[350px] ">
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
