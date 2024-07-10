//this is package imports, used to start the server
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//this is our routes, used to handle different routes
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

//this is our database import connection, used to connect to the database
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app } from "./socket/socket.js";

const PORT =  process.env.PORT || 5000;


dotenv.config();

app.use(express.json()); //middleware to parse json data (from req.body)
app.use(cookieParser()); //middleware to parse cookies

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

// app.get("/", (req, res) => {
//     //root route http://localhost:5000/
//     res.send("Hello World");
// });



app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});