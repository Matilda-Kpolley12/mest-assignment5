const express = require("express");

// Connecting db
require("./config/dbConnect")

// Instatiating express
const app = express();

// Json Format
app.use(express.json());

app.use('/furnitures', require('./router/furnitureRouter'));

// Port
app.listen(3000, () => console.log("Server is running on port 3000"))