import express from "express";
const app = express();
import mongoose from "mongoose";
import { usersRoutes } from "./routes/users.routes.js";
import { ReqDetails } from "./middleware/user.middleware.js";
import { validateUserFields } from "./middleware/user.middleware.js";

mongoose
  .connect(
    "mongodb+srv://ravimrvr:xwdXFYtz42IB1YoF@cluster0.tlrgd5o.mongodb.net/"
  ) // returns a promise
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.log("DB NOT CONNECTED", err);
  });

// ------------------middleware-------------------------------
//middleware for Log method and URL request and response status
//body parsing middleware
app.use(express.json());
app.use(ReqDetails);

app.put("/user/:id", validateUserFields);
// ------------------usersRoutes------------------------------
// usersRoutes mathod for requests
// ○ GET /users – Fetch the list of all users.
// ○ GET /users/:id – Fetch details of a specific user by ID.
// ○ POST /user – Add a new user.
// ○ PUT /user/:id – Update details of an existing user.
// ○ DELETE /user/:id – Delete a user by ID.
usersRoutes(app);
// -------------------------------------------------------------
const PORT = 8000;
app.get("/", (req, res) => {
  console.log("I am root route");
  res.json({ message: "Hello from root route!" });
});

app.listen(PORT, () => {
  console.log(` app is connted on ${PORT}`);
});

// ravimrvr
