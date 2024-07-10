import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
//creating a server using http module and passing the express app to it
const server = http.createServer(app);
//creating a socket server over the express server
const io = new Server(server,{
    cors:{
        origin:["http://localhost:3000"],
        methods:["GET","POST"]
    }
});

const userSocketMap = {}; //{userId: socketId} userId will be the key, socketId will be the value

 
io.on("connection",(socket)=>{
    console.log("User connected",socket.id);

    const userId = socket.handshake.query.userId;
    if(userId != "undefined") userSocketMap[userId] = socket.id;

    // io.emit() is used to send events to all connected clients
    io.emit("getOnlineUsers",Object.keys(userSocketMap));//who is online and who is offline


    //socket.on() method is used to listen for events. can be used both on client and server side 
    socket.on("disconnect",()=>{
        console.log("User disconnected",socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers",Object.keys(userSocketMap));
    })
})

export {app,io,server}