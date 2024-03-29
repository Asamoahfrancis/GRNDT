"use client";

import { Button } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import Snackbars from "./Snackbar";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useContext } from "react";
import * as Yup from "yup";
import SnackbarProvider, {
  SnackbaContext,
} from "@/app/context/SnackbarContext/Snackbar";
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MessageContent = () => {
  const ctx = useContext(SnackbaContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string().required("Required"),
    }),

    onSubmit: async (values) => {
      const payload = {
        name: values.name,
        email: values.email,
        message: values.message,
      };
      const res = await fetch("/api/message", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });

      try {
        const data = res.json();
      } catch (error) {
        console.log(error);
      }
      formik.resetForm();
    },
  });
  return (
    <div className="md:px-[50px]  px-[10px] bg-gradient-service md:bg-none  grid grid-cols-1 md:grid-cols-2 place-content-center md:min-h-[500px] md:p-2">
      <div className="mb-20 md:mb-0 mt-32 flex flex-col justify-center ">
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
            href="/contact-us"
            className=" hover:text-white hover:bg-gradient-green px-8 text-center border-[1px] border-solid border-darkGreen "
          >
            Contact Us
          </Button>
        </div>
      </div>
      <div className=" flex justify-center items-center md:mt-10 bg-white rounded-md opacity-95">
        <section className="w-[90%] pb-4">
          <form
            action=""
            className="flex flex-col gap-4"
            onSubmit={formik.handleSubmit}
          >
            <p className="md:text-[30px] py-2  text-lightRadientGreen">
              Send A Message
            </p>
            <TextField
              error={formik.touched.name && formik.errors.name ? true : false}
              label={`${
                formik.touched.name && formik.errors.name
                  ? "Incorrect entry"
                  : "Enter Your Name"
              }`}
              variant="outlined"
              className="bg-[#E3E3E3]  opacity-40"
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            <TextField
              label={`${
                formik.touched.name && formik.errors.name
                  ? "Incorrect entry"
                  : "Enter Your Email"
              }`}
              variant="outlined"
              className="bg-[#E3E3E3]  opacity-40"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            <TextField
              label={`${
                formik.touched.name && formik.errors.name
                  ? "Incorrect entry"
                  : "Enter your Message"
              }`}
              multiline
              rows={10}
              color="primary"
              className="bg-[#E3E3E3]  opacity-40"
              id="message"
              name="message"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.message}
              onBlur={formik.handleBlur}
            />
            <div>
              <Button
                onClick={ctx.handleClick}
                variant="text"
                type="submit"
                disabled={formik.isSubmitting}
                endIcon={<ArrowRightAltIcon />}
                className="bg-gradient-green  px-4 hover:border-lightRadientGreen hover:bg-gradient-inverse text-white transition-all duration-300 ease-in-out"
              >
                SEND MESSAGE{" "}
              </Button>

              <Snackbar
                open={ctx.open}
                autoHideDuration={6000}
                onClose={ctx.handleClose}
              >
                <Alert
                  onClose={ctx.handleClose}
                  sx={{ width: "100%" }}
                  className="bg-lightRadientGreen"
                >
                  Message Sent Successfully!
                </Alert>
              </Snackbar>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default MessageContent;
