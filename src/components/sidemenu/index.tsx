import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import WalletIcon from '@mui/icons-material/Wallet';
import { Logout } from "@mui/icons-material";
import React, { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

type menuOption = {
  Name: string;
  Icon: ReactNode;
  page: string;
};

const SideMenu = (props: Props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const routesBlockForGuest = ["/saved-places"];

  const options: menuOption[] = [
    { Name: "Home", Icon: <HomeIcon />, page: "/home" },
    {
      Name: "Saved places",
      Icon: <FmdGoodIcon />,
      page: "/saved-places",
    },
    { Name: "Scenes", Icon: <EventAvailableIcon />, page: "/scenes" },
    { Name: "Wallet", Icon: <WalletIcon />, page: "/wallet" },
  ];

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        (event as React.KeyboardEvent).key === "Tab"
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const navigateToPage = (page: string) => {
    navigate(page);
  };

  const OptionsList = () => {
    return (
      <List>
        {options
          .filter((el) => {
            return !(
              "guest" === "guest" && routesBlockForGuest.includes(el.page)
            );
          })
          .map((i: menuOption) => (
            <ListItem key={i.Name} disablePadding>
              <ListItemButton
                sx={{ "&:hover": { backgroundColor: "#222" } }}
                onClick={() => navigateToPage(i.page)}
              >
                <ListItemIcon sx={{ color: "#fff" }}>{i.Icon}</ListItemIcon>
                <ListItemText primary={i.Name} sx={{ color: "#fff" }} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    );
  };

  return (
    <Box>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { backgroundColor: "primary.main" }, // Fondo azul por defecto de MUI
        }}
      >
        <Box
          sx={{ width: 250, height: "inherit" }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              padding: "1rem",
              boxSizing: "border-box",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(false)}
              sx={{ color: "#fff" }} // Color blanco para el icono de cierre
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <OptionsList />
        </Box>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ padding: "1rem", "&:hover": { backgroundColor: "#222" } }}
            onClick={() => {}}
          >
            <ListItemIcon sx={{ color: "#fff" }}>
              <Logout />
            </ListItemIcon>
            <ListItemText primary={"Logout"} sx={{ color: "#fff" }} />
          </ListItemButton>
        </ListItem>
      </Drawer>
    </Box>
  );
};

export default SideMenu;
