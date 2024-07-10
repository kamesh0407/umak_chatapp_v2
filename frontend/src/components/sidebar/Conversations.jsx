import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation"
import "./customScrollbar.css";
// import './hideScrollbar.css';
// hide-scrollbar
const Conversations = () => {
 const {loading, conversations} = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto custom-scrollbar">

        {conversations.map((conversation,idx) => ( 
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIdx={idx === conversations.length - 1}

          />
         ))}
       
       {loading ? <span className="loading loading-spinner mx-auto"></span> : null} 
    </div>
  )
}

export default Conversations



//STARTER CODE FOR THIS FILE
// import Conversation from "./Conversation"

// const Conversations = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
        
//     </div>
//   )
// }

// export default Conversations