import { Users } from "../model/users.model.js";
// ==========================================================
// app.get("/users", GetUsers);
export async function GetUsers(req, res) {
  try {
    let users = await Users.find();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
//-----------------------------------------------------------
// app.get("/users/:id", GetUsersID);
export async function GetUsersID(req, res) {
  try {
    let id = req.params?.id;
    const user = await Users.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: `Error: ${err.message}` });
  }
}
//-------------------------------------------------------
// app.post("/user", AddUsers);
export async function AddUsers(req, res) {
  try {
    const { firstName, lastName, hobby } = req.body;
    let newUser = await Users.create({ firstName, lastName, hobby });
    return res.status(201).json({ user: newUser });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}
// ---------------------------------------------------------
// app.put("/user/:id", UpdateUsersID);
export async function UpdateUsersID(req, res) {
  try {
    let id = req.params.id;
    const { firstName, lastName, hobby } = req.body;

    // Update the user
    await Users.findByIdAndUpdate(id, { firstName, lastName, hobby });
    //  find user by ID
    const user = await Users.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "Edited successfully" });
  } catch (err) {
    return res.status(500).json({ message: "User cannot be updated" });
  }
}

// -------------------------------------------------------------
//app.delete("/user/:id", DeleteUsersID);
export async function DeleteUsersID(req, res) {
  try {
    const id = req.params.id;
    // Try to find and delete the user
    const deletedUser = await Users.findByIdAndDelete(id);
    // If no user found, respond with 404
    if (deletedUser === null || !deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    // User was found and deleted
    return res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    console.error("Error deleting user:", err);
    return res.status(500).json({ message: "User not deleted" });
  }
}
