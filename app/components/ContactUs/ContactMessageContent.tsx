import { Button } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import TextField from "@mui/material/TextField";

const ConatctMessageContent = () => {
  return (
    <div className="px-[50px] grid grid-cols-2 place-content-center min-h-[500px] gap-6 p-2 ">
      <div className="  pl-16 s  mt-10 bg-gradient-green text-white rounded-md ">
        <section className="w-[90%] flex flex-col gap-4 h-full justify-between   py-2  ">
          <div className="text-[30px] mt-2">Get in touch</div>
          <div>
            <p className="font-[500]">Visit us</p>
            <p className="text-xs">Come and say hello at our office</p>
            <p className="font-[600]">8th Link Road, Spintex, Accra. </p>
          </div>
          <div>
            <p className="font-[500]">Chat with us</p>
            <p>Our friendly team is here to help.</p>
            <p className="font-[600]">info@grndt.com </p>
          </div>
          <div>
            <p className="font-[500]">Call us</p>
            <p>
              Our team is ready to attend to your inquiries and requirements.
            </p>
            <p className="font-[600]">+233 54 323 5217 </p>
          </div>
          <div>
            <p className="font-[500]">Work hours</p>
            <p>We are ready to serve you from</p>
            <p className="font-[600]">Sun-Fri from 8:00AM-5:00PM </p>
          </div>
        </section>
      </div>
      <div className=" flex justify-center items-center mt-10 bg-white rounded-md opacity-95">
        <section className="w-[90%] pb-4">
          <form action="" className="flex flex-col gap-4">
            <p className="text-[30px] py-2  text-lightRadientGreen">
              Send A Message
            </p>
            <TextField
              id="outlined-basic"
              label="Enter Your Name"
              variant="outlined"
              className="bg-[#E3E3E3]  opacity-40 "
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

export default ConatctMessageContent;
