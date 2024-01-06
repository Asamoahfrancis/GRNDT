"use client";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useContext } from "react";
import SnackbarProvider, {
  SnackbaContext,
} from "@/app/context/SnackbarContext/Snackbar";
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Snackbars() {
  const ctx = useContext(SnackbaContext);

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Button variant="outlined" onClick={ctx.handleClick}>
        Open success snackbar
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
    </Stack>
  );
}
