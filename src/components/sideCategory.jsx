// MUI components
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { IconButton, Toolbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const categories = [
    "category 1",
    "category 2",
    "category 3",
    "category 4",
    "category 5",
  ];

  const availability = ["In Stock", "Low Stock", "Out of Stock"];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      {/* Add close button */}
      <Toolbar>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      {/* add product categories */}
      <List>
        <h3 className="ml-3 text-md font-semibold uppercase">
          Product Categories
        </h3>
        {categories.map((text) => (
          <ListItem key={text}>
            <FormControlLabel
              control={<Checkbox />}
              label={text}
              className="capitalize"
            />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <h3 className="ml-3 text-md font-semibold uppercase">Availability</h3>
        {availability.map((text) => (
          <ListItem key={text}>
            <FormControlLabel
              control={<Checkbox />}
              label={text}
              className="capitalize"
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton className="md:hidden!" onClick={toggleDrawer(true)}>
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
