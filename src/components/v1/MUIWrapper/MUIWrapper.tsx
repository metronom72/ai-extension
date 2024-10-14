import React, { memo } from "react";
import { CssBaseline } from "@mui/material";
import "@fontsource/inter";

interface MUIWrapperProps {
  children: JSX.Element | null;
}

const MUIWrapper = ({ children }: MUIWrapperProps) => {
  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
};

export default memo(MUIWrapper);
