const express = require("express");
const databaseConnection = require("./database");
const bookRouter = require("./routes/book.routes");
const userRouter = require("./routes/user.routes");
const authMiddleWare = require("./middleware/auth.middleware");
const cors = require("cors");

// database connection
databaseConnection(); 

const app = express();

app.use(express.json());
app.use(cors());

app.use("/book", bookRouter);
app.use("/user", userRouter);

app.listen(8000, () => {
  console.log("Port listening on 8000");
});
