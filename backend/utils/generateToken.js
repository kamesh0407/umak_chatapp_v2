import jwt from 'jsonwebtoken'; 

const generateTokenAndSetCookie = (UserId, res) => {
    const token = jwt.sign({UserId}, process.env.JWT_SECRET, {
        expiresIn: "15d"
    });
    // Created a cookie named jwt and sign method and set the token in it , send a payload of UserId and set the expiry time of 15 days

    res.cookie("jwt", token, {
       //maxAge the cookie live
        maxAge: 15 * 24 * 60 * 60 * 1000, // DD * HH * MM * SS * MS, It will be in  MS
        httpOnly: true, //prevent cookie access from javascript, prevent XSS attack also known as Cross Site Scripting attacks
        sameSite: "strict", //cookie will only be sent in a first-party context, CSRF attack also known as Cross Site Request Forgery attacks
        secure: process.env.NODE_ENV !== "development" //cookie will only be sent in a secure context, HTTPS
});
};

export default generateTokenAndSetCookie;