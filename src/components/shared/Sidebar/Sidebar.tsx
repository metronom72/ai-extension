import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemDecorator,
  Typography,
} from "@mui/joy";
import {
  Apps,
  Chat,
  History,
  Home,
  Settings,
  Timer,
} from "@mui/icons-material";
import React, { memo } from "react";

const Sidebar: React.FC = () => {
  return (
    <Box
      component="nav"
      sx={{
        width: 240,
        height: "100%",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
      }}
      aria-label="Main navigation"
    >
      <List role="navigation" aria-labelledby="main-menu" sx={{ flexGrow: 1 }}>
        <ListItem role="menuitem">
          <ListItemButton aria-label="Home">
            <ListItemDecorator>
              <Home />
            </ListItemDecorator>
            <Typography>Home</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem role="menuitem">
          <ListItemButton aria-label="Chats">
            <ListItemDecorator>
              <Chat />
            </ListItemDecorator>
            <Typography>Chats</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem role="menuitem">
          <ListItemButton aria-label="Apps">
            <ListItemDecorator>
              <Apps />
            </ListItemDecorator>
            <Typography>Apps</Typography>
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem role="menuitem">
          <ListItemButton aria-label="History">
            <ListItemDecorator>
              <History />
            </ListItemDecorator>
            <Typography>History</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem role="menuitem">
          <ListItemButton aria-label="Timers">
            <ListItemDecorator>
              <Timer />
            </ListItemDecorator>
            <Typography>Timers</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem role="menuitem">
          <ListItemButton aria-label="Settings">
            <ListItemDecorator>
              <Settings />
            </ListItemDecorator>
            <Typography>Settings</Typography>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default memo(Sidebar);
