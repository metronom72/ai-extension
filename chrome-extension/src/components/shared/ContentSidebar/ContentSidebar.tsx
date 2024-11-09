import React, { memo } from "react";
import { Avatar, IconButton, Stack, Tooltip, Typography } from "@mui/joy";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseOutlined from "@mui/icons-material/CloseOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { useGlobalState } from "providers/GlobalStateProvider/GlobalStateProvider";

const ContentSidebar: React.FC = () => {
  const { ...rest } = useGlobalState();
  console.log(rest);
  return (
    <Stack>
      <Stack direction="row" spacing={1} useFlexGap>
        <Tooltip title="Full Screen Chat">
          <IconButton size="sm">
            <FullscreenIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Close Sidebar">
          <IconButton size="sm">
            <CloseOutlined />
          </IconButton>
        </Tooltip>
      </Stack>
      <Stack justifyContent="space-between" sx={{ height: "100%" }}>
        <Stack spacing={3} useFlexGap alignItems="center">
          <Stack alignItems="center">
            <IconButton size="lg">
              <GridViewIcon />
            </IconButton>
            <Typography level="body-sm">Apps</Typography>
          </Stack>

          <Stack alignItems="center">
            <IconButton size="lg">
              <ForumOutlinedIcon />
            </IconButton>
            <Typography level="body-sm">Chats</Typography>
          </Stack>

          <Stack alignItems="center">
            <IconButton size="lg">
              <EditNoteOutlinedIcon />
            </IconButton>
            <Typography level="body-sm">Writer</Typography>
          </Stack>

          <Stack alignItems="center">
            <IconButton size="lg">
              <HandymanOutlinedIcon />
            </IconButton>
            <Typography level="body-sm">Tools</Typography>
          </Stack>

          <Stack alignItems="center">
            <IconButton size="lg">
              <HistoryOutlinedIcon />
            </IconButton>
            <Typography level="body-sm">History</Typography>
          </Stack>
        </Stack>

        <Stack spacing={1} useFlexGap alignItems="center" pb={2}>
          <Stack alignItems="center">
            <IconButton size="md">
              <SettingsOutlinedIcon />
            </IconButton>

            <IconButton size="md">
              <AdminPanelSettingsOutlinedIcon />
            </IconButton>

            <IconButton size="lg">
              <Avatar>MD</Avatar>
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default memo(ContentSidebar);
