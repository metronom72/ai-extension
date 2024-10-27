import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50", // Green color for "Office Assistant" and main buttons
    },
    secondary: {
      main: "#ff4081", // Pink/purple color for toggles and accents
    },
    background: {
      default: "#fafafa", // Light background color
      paper: "#ffffff", // Background for cards or elevated surfaces
    },
    text: {
      primary: "#333333", // Darker gray for primary text
      secondary: "#888888", // Light gray for secondary text
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif', // Use modern sans-serif font
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#4CAF50", // Green for headings
    },
    button: {
      textTransform: "none", // Disable uppercase transformation for buttons
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // Rounded button corners
          padding: "8px 16px",
          fontWeight: 500,
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#43a047", // Darker green on hover for primary buttons
          },
        },
        outlined: {
          borderColor: "#4CAF50", // Green outline for outlined buttons
          "&:hover": {
            borderColor: "#43a047", // Darker green on hover
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#888888", // Gray icons by default
          "&:hover": {
            color: "#4CAF50", // Green on hover
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: "#ff4081", // Pink for toggle switch
        },
        track: {
          backgroundColor: "#ff4081", // Pink track color for switch
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h4: {
          color: "#4CAF50", // Use primary green for titles
        },
        subtitle1: {
          color: "#888888", // Light gray for subtitles or secondary text
        },
      },
    },
  },
});

export default theme;
