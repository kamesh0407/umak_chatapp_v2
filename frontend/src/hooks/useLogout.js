import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading,setLoading] = useState(false);
  const {setAuthUser} = useAuthContext()

  const logout = async () => {
    setLoading(true);
    try {
        const res = await fetch('/api/auth/logout', {
            method: 'POST',
            headers: {"content-type":"application/json"},
        } );
        const data = await res.json();
        if(data.error){
            throw new Error(data.error)
        }
        //it will remove the chat-user from the local storage and set the authUser to null and navigate to login page, function given in app.jsx
        localStorage.removeItem("chat-user")
        setAuthUser(null)
    }catch (error) {
        toast.error(error.message)
    }finally{
        setLoading(false);  
    }

  }

  return {loading,logout};
}

export default useLogout