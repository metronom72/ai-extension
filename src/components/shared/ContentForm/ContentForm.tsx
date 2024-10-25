import React, { memo } from "react";
import {
  Box,
  Divider,
  IconButton,
  Option,
  Select,
  Sheet,
  Stack,
  Textarea,
  Tooltip,
} from "@mui/joy";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import SendIcon from "@mui/icons-material/Send";
import GradientIcon from "components/v1/GradientIcon";
import AttachFileOutlined from "@mui/icons-material/AttachFileOutlined";

const ContentForm: React.FC = () => {
  return (
    <Box p={2}>
      <Sheet
        variant="outlined"
        sx={{
          width: "100%",
          borderRadius: "8px 8px 8px 0px",
          boxShadow: "sm",
        }}
      >
        <Stack useFlexGap spacing={2}>
          <Stack
            justifyContent="flex-end"
            direction="row"
            alignItems="flex-end"
          >
            <Textarea
              variant="plain"
              minRows={1}
              size="sm"
              sx={{ width: "100%", paddingTop: 2, paddingBottom: 2 }}
              maxRows={6}
            />
            <IconButton size="sm">
              <AttachFileOutlined />
            </IconButton>
            <IconButton size="sm">
              <GradientIcon>
                <SendIcon />
              </GradientIcon>
            </IconButton>
          </Stack>
          <Divider />
          <Box p={1} pt={0}>
            <Stack direction="row">
              <Stack direction="row">
                <Select
                  variant="plain"
                  placeholder="Select Model"
                  value="ai-cat"
                  size="sm"
                  slotProps={{
                    listbox: { disablePortal: true },
                  }}
                >
                  <Option value="ai-cat">Ai Cat</Option>
                </Select>
                <Tooltip title="Info">
                  <IconButton size="sm">
                    <HelpCenterOutlinedIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Sheet>
    </Box>
  );
};

export default memo(ContentForm);
