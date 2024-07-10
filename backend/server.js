//this is package imports, used to start the server
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


//this is our routes, used to handle different routes
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

//this is our database import connection, used to connect to the database
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";


const PORT =  process.env.PORT || 5000;

const __dirname = path.resolve();


dotenv.config();

app.use(express.json()); //middleware to parse json data (from req.body)
app.use(cookieParser()); //middleware to parse cookies

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
})




server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});