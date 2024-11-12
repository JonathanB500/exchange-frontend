import { ChevronLeftOutlined } from "@mui/icons-material";
import { DialogTitle, Button, Drawer, IconButton} from "@mui/material";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return <div>
    <Button onClick={toggleDrawer(true)}>Open drawer</Button>
    <Drawer open={open} onClose={toggleDrawer(false)}>
      <IconButton onClick={handleDrawerClose}>
        <ChevronLeftOutlined/>
      </IconButton>
      <DialogTitle>Title</DialogTitle>
    </Drawer>
     
  </div>;

};

export default Home;
