import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    // 1. senderId, receiverId, message
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message:{
        type: String,
        required: true
    }
    //createdAt, updatedAt => message.createdAt : 1:00pm, message.updatedAt : 1:05pm
}, {timestamps: true});


const message = mongoose.model("Message", messageSchema);

export default message;