import { Button } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import TextField from "@mui/material/TextField";

const MessageContent = () => {
  return (
    <div className="md:px-[50px]  px-[10px] bg-gradient-service  grid grid-cols-1 md:grid-cols-2 place-content-center md:min-h-[500px] md:p-2">
      <div className="mb-20 md:mb-0 mt-32 flex    flex-col justify-center ">
        <p className="md:text-xs tracking-widest text-textColor text-[16px]  mb-4  ">
          GET IN TOUCH NOW
        </p>
        <p className="md:text-[30px] text-[20px] md:leading-4 text-lightRadientGreen">
          Feel free to reach out to us for{" "}
        </p>
        <p className="md:text-[30px] text-[20px] text-lightRadientGreen">
          any additional information.{" "}
        </p>
        <p className=" my-6 text-textColor md:w-4/6">
          Ready to elevate your online presence to new heights? Reach out to us
          today, and let our expert team guide you towards achieving your goals.
        </p>
        <div className="w-full md:ext-center">
          <Button
            variant="text"
            endIcon={<ArrowRightAltIcon />}
            className=" hover:text-white hover:bg-gradient-green px-8 text-center border-[1px] border-solid border-darkGreen "
          >
            Contact Us
          </Button>
        </div>
      </div>
      <div className=" flex justify-center items-center md:mt-10 bg-white rounded-md opacity-95">
        <section className="w-[90%] pb-4">
          <form action="" className="flex flex-col gap-4">
            <p className="md:text-[30px] py-2  text-lightRadientGreen">
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
                className="  text-white hover:text-lightRadientGreen hover:bg-none  bg-gradient-green px-8 text-center border-[1px] border-solid border-darkGreen "
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
