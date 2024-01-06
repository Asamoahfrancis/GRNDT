"use client";
import React from "react";
interface snackbarType {
  open: boolean;
  setOpen: (arg: boolean) => void;
  handleClose: (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => void | null;
  handleClick: () => void;
}
export const SnackbaContext = React.createContext<snackbarType>({
  open: false,
  setOpen: (arg) => {},
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => {},
  handleClick: () => {},
});

const SnackbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <SnackbaContext.Provider
      value={{ open, handleClick, setOpen, handleClose }}
    >
      {children}
    </SnackbaContext.Provider>
  );
};

export default SnackbarProvider;
