// MUI imports
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

// react imports
import { useState } from "react";

// redux imports
import { useSelector } from "react-redux";

export default function Profile() {
  const [editMode, setEditMode] = useState({
    username: false,
    email: false,
  });

  const users = useSelector((state) => state.user.users);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [userData, setUserData] = useState(currentUser);

  const toggleEditMode = (field) => {
    setEditMode((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  // changing user data handlers
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSave = () => {
    const existingUser = users.find(
      (user) =>
        (user.email === userData.email ||
          user.username === userData.username) &&
        user.id !== currentUser.id
    );
    
    if (userData.username === "" || userData.email === "") {
      alert("Username and email cannot be empty.");
    } else if (existingUser) {
      alert("Username or email already exists.");
      return;
    } else {
      localStorage.setItem("currentUser", JSON.stringify(userData));
      localStorage.setItem(
        "users",
        JSON.stringify(
          users.map((user) => (user.id === currentUser.id ? userData : user))
        )
      );
    }
    alert("Profile updated successfully!");
  };

  return (
    <main className="flex flex-col gap-4 my-10 mx-10 lg:mx-40">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <form className="space-y-4 max-w-xl" onSubmit={handleSave}>
        <div className="flex gap-4 items-center">
          <TextField
            id="username"
            label="Username"
            variant="filled"
            fullWidth
            color="primary"
            onChange={handleChange}
            value={userData.username}
            disabled={!editMode.username}
          />
          <Button
            type="button"
            variant="outlined"
            onClick={() => toggleEditMode("username")}
            startIcon={<EditIcon />}
          >
            edit
          </Button>
        </div>
        <div className="flex gap-4 items-center">
          <TextField
            id="email"
            label="Email"
            variant="filled"
            fullWidth
            color="primary"
            onChange={handleChange}
            value={userData.email}
            disabled={!editMode.email}
          />
          <Button
            type="button"
            variant="outlined"
            onClick={() => toggleEditMode("email")}
            startIcon={<EditIcon />}
          >
            edit
          </Button>
        </div>
        <Button
          variant="contained"
          className="text-white! w-32"
          type="submit"
          disabled={!editMode.username && !editMode.email}
        >
          Save
        </Button>
      </form>
    </main>
  );
}
