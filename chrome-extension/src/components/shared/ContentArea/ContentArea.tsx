import React from "react";
import { Box, Typography } from "@mui/joy";
import Summarize from "@mui/icons-material/Summarize";
import Timer from "@mui/icons-material/Timer";
import GroupWork from "@mui/icons-material/GroupWork";
import DateRange from "@mui/icons-material/DateRange";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import AppButton from "components/v1/AppButton";
import GradientText from "components/v1/GradientText";
import GradientIcon from "components/v1/GradientIcon";

const ContentArea: React.FC = () => {
  return (
    <Box sx={{ padding: 4, margin: "0 auto" }} role="main">
      <Typography level="h4" component="h1">
        Welcome to the <GradientText>Office Assistant!</GradientText>
      </Typography>
      <Typography level="h4" component="h4" gutterBottom>
        How can I assist you today?
      </Typography>

      <Box sx={{ marginTop: 2, display: "flex", flexWrap: "wrap", gap: 2 }}>
        <AppButton
          size="sm"
          startDecorator={
            <GradientIcon>
              <Summarize />
            </GradientIcon>
          }
        >
          Summarize Page
        </AppButton>
        <AppButton size="sm" startDecorator={<GroupWork />}>
          Relations
        </AppButton>
        <AppButton size="sm" startDecorator={<Timer />}>
          AI Timers
        </AppButton>
        <AppButton size="sm" startDecorator={<DateRange />}>
          AI Daily Planning
        </AppButton>
        <AppButton size="sm" endDecorator={<OpenInNewIcon />}>
          Knowledge Base
        </AppButton>
        <AppButton size="sm" endDecorator={<OpenInNewIcon />}>
          Your Profile
        </AppButton>
      </Box>
    </Box>
  );
};

export default ContentArea;
