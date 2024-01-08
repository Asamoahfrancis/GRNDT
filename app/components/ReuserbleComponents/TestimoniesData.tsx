import React from "react";

const TestimoniesData = ({
  data_one,
  data_two,
  data_three,
}: {
  data_one: string;
  data_two: string;
  data_three: string;
}) => {
  return (
    <div className="md:grid place-items-center my-6">
      <p className=" md:w-[60%] md:-mt-4">{data_one}</p>
      <p className="md:text-xs text-base font-[500] tracking-widest md:mt-5">
        {data_two}
      </p>
      <p className="md:text-xs text-textColor mb-6 md:mb-0">{data_three}</p>
    </div>
  );
};

export default TestimoniesData;
