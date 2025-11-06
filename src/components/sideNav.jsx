// MUI components
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Toolbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";

import { NavLink } from "react-router";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // Handle individual item clicks
  const handleItemClick = () => {
    setOpen(false); // Only close when navigating to a new page
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      {/* Add close button */}
      <Toolbar>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {["Home", "Products", "About", "Contact"].map((text) => (
          <NavLink key={text} to={text === "Home" ? `/` : `/${text.toLowerCase()}`}>
            <ListItem disablePadding>
              <ListItemButton onClick={handleItemClick}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
      <List>
        {/* add the search bar here */}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton className="md:hidden!" color="primary" onClick={toggleDrawer(true)}>
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}