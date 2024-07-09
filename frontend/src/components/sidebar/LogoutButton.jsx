import {BiLogOut} from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'

const LogoutButton = () => {

  //when we click logout button in the screen, it will call the logout function from useLogout.js
  const {loading, logout} = useLogout();
  return (
    <div className="mt-auto">
       {!loading ? ( 
        <BiLogOut className="w-6 h-6 text-white cursor-pointer" 
        onClick={logout}
        />) : (
          <span className='loading loading-spinner'></span>
        )}

    </div>
  )
}

export default LogoutButton