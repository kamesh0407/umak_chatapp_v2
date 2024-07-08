const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZ3Yh4wUxTOOlIIYjq3d-Tq2_ONU8tFpPyQ&s" alt="Tailwind CSS chat bubble component" />
            </div>

        </div>

        <div className={`chat-bubble text-white bg-yellow-600`}>
            Hi! what is app?
        </div>
        <div className="chat-footer opacity-50 text-xs flex items-center">12:20</div>

    </div>
  )
}

export default Message