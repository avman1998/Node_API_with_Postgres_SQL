const express = require("express");
const app = express();
const PORT = 7000;
const { userRouter } = require("./routes/user");
//Using builtin middleware
app.use(express.json());
app.use("/users", userRouter);
app.listen(PORT, console.log("Server started!!1"));
