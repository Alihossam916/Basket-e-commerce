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
import { Maximize } from "@mui/icons-material";

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
    <Box role="presentation">
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
      {/* Price Range */}
      <List>
        <h3 className="ml-3 text-md font-semibold uppercase">Price Range</h3>
        <div className="flex items-end m-3 gap-2 max-w-[350px]">
          <div className="flex flex-col">
            <label className="text-md mb-2">From</label>
            <input
              type="number"
              placeholder="0"
              className="w-full bg-gray-200 border border-black p-2"
            />
          </div>
          <span className="">-</span>
          <div className="flex flex-col">
            <label className="text-md mb-2">To</label>
            <input
              type="number"
              placeholder="0"
              className="w-full bg-gray-200 border border-black p-2"
            />
          </div>
        </div>
      </List>
      <Divider />
      {/* Product Availability */}
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
      <IconButton
        className="flex justify-start! lg:hidden! bg-gray-100! w-full rounded-none!"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
