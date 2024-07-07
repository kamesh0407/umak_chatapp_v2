import bcrypt from "bcryptjs";
import User from "../models/user.model.js";


export const signup = async (req, res) => {
   try {
        const { fullName,username,password,confirmPassword,gender } = req.body; //get input from the user

        //check the password and confirm password is equal
        if (password !== confirmPassword){
            return res.status(400).json({error:"Passwords do not match"});
        }
        //check if the user already exists
        const user = await User.findOne({username});
        //if yes, return error with status 400
        if (user){
            return res.status(400).json({error:"User already exists"});
        }

        //HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        //https://avatar-placeholder.iran.liara.run/


        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        //if new user, create a new user with hashed password
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });

       if(newUser){
        //Generate JWT token
        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
        });
       } else{
        res.status(400).json({error:"Invalid user data"});
       }

   } catch (error) {       
    console.log("Error in signup controller: ",error.message);
       res.status(500).json({error:"Internal Server Error"});
   }
}

export const login = (req, res) => {
    console.log("loginUser");
}   

export const logout = (req, res) => {
    console.log("logoutUser");
}