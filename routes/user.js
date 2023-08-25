const express = require("express");
const userRouter = express.Router();
const { pool } = require("../db");
const {
  handleGetUsers,
  handleGetUsersById,
  handlePostUser,
  handleUpdateUserById,
  handleDeleteUserById,
} = require("../controllers/user");
userRouter.get("/", handleGetUsers);
userRouter.get("/:id", handleGetUsersById);

userRouter.post("/", handlePostUser);

userRouter.patch("/:id", handleUpdateUserById);

userRouter.delete("/:id", handleDeleteUserById);

module.exports = {
  userRouter,
};
