import useSidebarState from "../providers/SidebarStateProvider/useSidebarState";
import { Stack } from "@mui/joy";
import { sidebarWidth } from "../content";
import ContentAppSidebar from "components/shared/ContentSidebar";
import React, { memo } from "react";
import InitialScene from "scenes/InitialScene";

const SceneWrapper = (): JSX.Element => {
  const { isOpen } = useSidebarState();

  return (
    <Stack
      direction="row"
      sx={{
        height: "100vh",
        position: "relative",
        backgroundColor: "white",
        maxWidth: isOpen ? sidebarWidth : 0,
      }}
    >
      <Stack
        direction="column"
        sx={{
          flex: 1,
          position: "relative",
          justifyContent: "space-between",
        }}
      >
        <InitialScene />
      </Stack>
      <ContentAppSidebar />
    </Stack>
  );
};

export default memo(SceneWrapper);
