import express from 'express';
import { getMessages, sendMessage } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();
/* /api/messages/send/:id when we have this request from server.js (app.use("/api/messages",messageRoutes))
it will go to protectRoute middleware first and then to sendMessage controller 
*/
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute,sendMessage);

export default router;