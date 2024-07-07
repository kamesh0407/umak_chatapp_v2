import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT =  process.env.PORT || 5000;


dotenv.config();

app.use(express.json()); //middleware to parse json data (from req.body)

app.use("/api/auth",authRoutes)

// app.get("/", (req, res) => {
//     //root route http://localhost:5000/
//     res.send("Hello World");
// });



app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});