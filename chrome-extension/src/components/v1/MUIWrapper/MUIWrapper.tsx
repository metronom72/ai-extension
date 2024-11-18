import { memo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "@fontsource/inter";
import theme from "components/theme";
import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy/styles";

interface MUIWrapperProps {
  children: JSX.Element | null;
}

const MUIWrapper = ({ children }: MUIWrapperProps) => {
  return (
    <ThemeProvider theme={theme}>
      <JoyCssVarsProvider>
        <CssBaseline />
        {children}
      </JoyCssVarsProvider>
    </ThemeProvider>
  );
};

export default memo(MUIWrapper);
