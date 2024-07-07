import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        /* the protected route will have a token in the cookie, it will check if the token is present or not and if it is present,
         it will verify the token and get the user details from the token
          and attach it to the request object and call the next middleware function.*/
        if(!token){
            return res.status(401).json({error: "Unauthorized: No token provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({error: "Unauthorized: Invalid token"});
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(404).json({error: "User not found"});
        }

        req.user = user;    

        next();

    } catch (error) {
      console.log("Error in protectRoute middleware: ", error.message);
      res.status(500).json({ error: "Internal Server Error"});  
    }}

    export default protectRoute;    