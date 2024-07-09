
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';

function App() {
    const {authUser} = useAuthContext(); 

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
     {/* <SignUp/> */}
     <Routes>
      <Route path='/' element={authUser ? <Home/> : < Navigate to={"/login"}/>} />
      <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
      <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} /> 
      {/* The above line will redirect the user to the home page if the user is already logged in, else it will show the signup page */}
     </Routes>
     <Toaster />
    </div>
  )
}

export default App;
