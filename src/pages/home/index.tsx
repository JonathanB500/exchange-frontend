import { ChevronLeftOutlined } from "@mui/icons-material";
import { DialogTitle, Button, Drawer, IconButton, Box, Typography, TextField} from "@mui/material";
import React from "react";
import AuthDrawer from "../../components/Login-signIn/AuthDrawer";

type Props = {};

// Main Home Component
const Home = () => {
  
  return (
    <div>
      <AuthDrawer></AuthDrawer>
    </div>
  );
};

export default Home;