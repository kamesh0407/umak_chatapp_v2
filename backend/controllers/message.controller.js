import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        // 1. get the message from the user as an input
        const {message} = req.body;
        // 2. get the receiverId from the params
        const { id:receiverId } = req.params; 
        // 3. get the senderId from the req.user object, because it is protected route
        const senderId = req.user._id;

        // 4. check if the conversation already exists between the sender and receiver
        let conversation = await Conversation.findOne({
            participant: { $all: [senderId, receiverId] },

            }
        )
        // 5. if the conversation does not exist, create a new conversation
        if(!conversation){
            conversation = await Conversation.create({
                participant: [senderId, receiverId],
            })
        }   
        // 6. create a new message
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        }); 
        // 7. save the message
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        
        // await conversation.save(); take 1 second to run
        // await newMessage.save();again it will take another 1 second to run

        //this will run in parallel
        await Promise.all([conversation.save(), newMessage.save()]);

        // 8. save the conversation
        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({ error: "Internal Server Error"})
    }
};

export const getMessages = async (req, res) => {

    try {
        const {id:userTOChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participant: { $all: [senderId, userTOChatId] },
        }).populate("messages");//Not referencing the message model, but the messages field in the conversation model

        if(!conversation){
            return res.status(200).json([]);
        }

        const messages = conversation.messages;

        res.status(200).json(messages);

    } catch (error) {
        console.log("Error in getMessages controller: ", error.message);
        res.status(500).json({ error: "Internal Server Error"})
    }
}


