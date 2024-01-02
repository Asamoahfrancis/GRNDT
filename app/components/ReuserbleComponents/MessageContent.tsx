import { Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import TextField from "@mui/material/TextField";
import { createTheme } from "@mui/material/styles";

const MessageContent = () => {
  return (
    <div className="px-[50px]  grid grid-cols-2 place-content-center min-h-[500px] p-2">
      <div className=" flex flex-col justify-center ">
        <p className="text-xs text-textColor mb-4 tracking-widest ">
          GET IN TOUCH NOW
        </p>
        <p className="text-[30px] leading-4 text-lightRadientGreen">
          Feel free to reach out to us for{" "}
        </p>
        <p className="text-[30px]  text-lightRadientGreen">
          any additional information.{" "}
        </p>
        <p className=" my-6 text-textColor w-4/6">
          Ready to elevate your online presence to new heights? Reach out to us
          today, and let our expert team guide you towards achieving your goals.
        </p>
        <div className="w-full text-center">
          <Button
            variant="text"
            endIcon={<ArrowRightAltIcon />}
            className="  hover:bg-gradient-green px-8 text-center border-[1px] border-solid border-darkGreen  text-darkGreen"
          >
            About Us
          </Button>
        </div>
      </div>
      <div className="border flex justify-center items-center mt-10 bg-white rounded-md opacity-95">
        <section className="w-[90%] pb-4">
          <form action="" className="flex flex-col gap-4">
            <p className="text-[30px] py-2  text-lightRadientGreen">
              Send A Message
            </p>
            <TextField
              id="outlined-basic"
              label="Enter Your Name"
              variant="outlined"
              className="bg-[#E3E3E3]  opacity-40"
            />
            <TextField
              id="outlined-basic"
              label="Enter Your Email"
              variant="outlined"
              className="bg-[#E3E3E3]  opacity-40"
            />
            <TextField
              id="outlined-multiline-static"
              label="Enter your Message"
              multiline
              rows={10}
              color="primary"
              className="bg-[#E3E3E3]  opacity-40"
            />
            <div>
              <Button
                variant="text"
                endIcon={<ArrowRightAltIcon />}
                className="  hover:text-white hover:bg-none text-white bg-gradient-green px-8 text-center border-[1px] border-solid border-darkGreen "
              >
                SEND MESSAGE{" "}
              </Button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default MessageContent;
