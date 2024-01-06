"use client";
import React, { useState } from "react";

interface TestimonialsTypes {
  clickNumber: number;
  setClickNumber: (arg: number) => void;
  RightClick: () => void;
  LeftClick: () => void;
}
export const TestimonialsContext = React.createContext<TestimonialsTypes>({
  clickNumber: 1,
  setClickNumber: (arg) => {},
  RightClick: () => {},
  LeftClick: () => {},
});
const TestimoniesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [clickNumber, setClickNumber] = useState(1);

  const RightClick = () => {
    setClickNumber((prev) => prev++);
  };
  const LeftClick = () => {
    setClickNumber((prev: number): any => {
      if (prev > 0) {
        return prev--;
      } else {
        return;
      }
    });
  };

  return (
    <TestimonialsContext.Provider
      value={{ clickNumber, LeftClick, RightClick, setClickNumber }}
    >
      {children}
    </TestimonialsContext.Provider>
  );
};

export default TestimoniesContextProvider;
