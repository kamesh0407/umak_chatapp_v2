import mongoose from "mongoose";    
const conversationSchema = new mongoose.Schema({
    // 1. senderId, receiverId,
    participant:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    ],
    // 2. messages
    messages:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message" ,
            default: []
        },
    ],
}, {timestamps: true});

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;