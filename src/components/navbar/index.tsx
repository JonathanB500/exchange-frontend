import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import SideMenu from "../sidemenu";
import AuthDrawer from "../Login-signIn/AuthDrawer";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <SideMenu />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ExchangeApp
          </Typography>
          <AuthDrawer/>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
