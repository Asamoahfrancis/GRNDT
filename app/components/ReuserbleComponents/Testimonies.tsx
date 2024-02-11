"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TestimonialsContext } from "@/app/context/TestimoniesContext/TestimoniesContext";
import { useContext } from "react";
import TestimoniesData from "./TestimoniesData";
const Testimonies = () => {
  const ctx = useContext(TestimonialsContext);
  const [count, setCount] = useState(0);

  const LeftClick = () => {
    setCount((prevIndex) =>
      prevIndex === 0 ? (prevIndex = 0) : prevIndex - 1
    );
  };

  const RightClick = () => {
    setCount((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const TestimoniesDatum = [
    {
      id: "t1",
      data_one: `“You and your team are doing good work. Ill do everything I can to
      bring you more clients”`,
      data_two: `Jonathan Kwamegah`,
      data_three: `CEO KNVAS`,
    },
    {
      id: "t2",
      data_one: `“This is a built-in middleware function in Express. It parses incoming requests with JSON”`,
      data_two: `Unicode encoding`,
      data_three: ` the middleware`,
    },
    {
      id: "t3",
      data_one: `“You and your team are doing good work. Ill do everything I can to
      bring you more clients”`,
      data_two: `Jonathan Kwamegah`,
      data_three: `CEO KNVAS`,
    },
    {
      id: "t4",
      data_one: `“This is a built-in middleware function in Express. It parses incoming requests with JSON”`,
      data_two: `Unicode encoding`,
      data_three: ` the middleware`,
    },
    {
      id: "t5",
      data_one: `“This is used to determine what media type the middleware will parse”`,
      data_two: ` middleware, allowing`,
      data_three: `Sends the specified `,
    },
    {
      id: "t6",
      data_one: `“This is used to determine what media type the middleware will parse”`,
      data_two: ` middleware, allowing`,
      data_three: `Sends the specified `,
    },
  ];

  return (
    <div className="md:px-[50px]  px-[20px] md:mt-20 md:flex  justify-center">
      <section className="flex items-center my-4 md:my-0 justify-center  md:flex-row  md:gap-20 text-textColor">
        <p
          className=" p-2 rounded-full  cursor-pointer  bg-gradient-green "
          onClick={LeftClick}
        >
          <Image
            src="/pushRight.png"
            width={24}
            height={24}
            alt="Picture of the author"
            className="hover:scale-150 transition-all duration-300 ease-in-out"
          />
        </p>
        <div className="text-center mt-10 md:mt-0">
          <p className="md:text-sm text-textColor  text-[16px] tracking-widest">
            WHAT OUR CLIENTS SAY
          </p>
          <p className="md:text-[30px] text-[20px] my-3 md:my-0  text-lightRadientGreen md:mb-10">
            Testimonials
          </p>
          {
            <TestimoniesData
              data_one={TestimoniesDatum[count].data_one}
              data_two={TestimoniesDatum[count].data_two}
              data_three={TestimoniesDatum[count].data_three}
            />
          }
        </div>
        <p
          className=" p-2 rounded-full  cursor-pointer  bg-gradient-green "
          onClick={RightClick}
        >
          <Image
            src="/arrow-circle-left.png"
            width={24}
            height={24}
            alt="Picture of the author"
            className="hover:scale-150 transition-all duration-300 ease-in-out"
          />
        </p>
      </section>
    </div>
  );
};

export default Testimonies;
