import { IconButton, Stack, Tooltip, Typography } from "@mui/joy";
import { memo } from "react";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";

const ContentHeader = () => {
  return (
    <Stack
      direction="row"
      sx={{ justifyContent: "space-between", alignItems: "center" }}
      spacing={1}
      useFlexGap
      pl={2}
      pr={2}
    >
      <Typography level="body-sm">Chat</Typography>
      <Stack direction="row">
        <Tooltip title="Info">
          <IconButton size="sm">
            <HelpCenterOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </Stack>
  );
};

export default memo(ContentHeader);
