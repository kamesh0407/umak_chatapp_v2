import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox.jsx";
import { useState } from "react";

import useSignup from "../../hooks/useSignup.js";

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const {loading, signup} = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs,gender})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);

  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto"> 
      <div className=" w-full p-6 bg-gray-100 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
      <h1 className='text-3xl font-semibold text-center  text-gray-300'>
        {/* change this color to change the color of the Title */}
        <span className="text-yellow-700">  
          
             Umak ChatApp
          </span>
          <br />
          Sign Up 
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">
                    Full name
              </span>
            </label>
            <input type="text" placeholder="John Doe" className="w-full input input-bordered h-10" 
              value={inputs.fullName}
              onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
            />

          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">
                Username
              </span>
            </label>
            <input type="text" placeholder="john" className="w-full input input-bordered h-10" 
              value={inputs.username}
              onChange={(e) => setInputs({...inputs, username: e.target.value})}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">
                Password
              </span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" 
            value={inputs.password}
            onChange={(e) => setInputs({...inputs, password: e.target.value})}
            
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">
                Confirm Password
              </span>
            </label>
            <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10"
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
            />
          </div>

          <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender}/>

          <Link to={"/login"} className="test-sm hover:underline hover:text-yellow-600 mt-2 inline-block" href="#" >Already have an account?</Link>

          <div>
          <button className="btn btn-block btn-sm mt-2 border border-slate-700"
          disabled={loading}
          >
            {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
          </button>
        </div>
        </form>
      </div>  
    </div>

    
  )
}

export default SignUp;




// STARTER CODE FOR THIS SIGNUP PAGE
// import GenderCheckbox from "./GenderCheckbox.jsx";

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto"> 
//       <div className=" w-full p-6 bg-gray-100 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
//       <h1 className='text-3xl font-semibold text-center  text-gray-300'>
//         {/* change this color to change the color of the Title */}
//         <span className="text-yellow-700">  
          
//              Umak ChatApp
//           </span>
//           <br />
//           Sign Up 
//         </h1>
//         <form >
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">
//                     Full name
//               </span>
//             </label>
//             <input type="text" placeholder="Kamesh R" className="w-full input input-bordered h-10"  />

//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">
//                 Username
//               </span>
//             </label>
//             <input type="text" placeholder="kamesh" className="w-full input input-bordered h-10"  />
//           </div>

//           <div>
//             <label className="label">
//               <span className="text-base label-text">
//                 Password
//               </span>
//             </label>
//             <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
//           </div>

//           <div>
//             <label className="label">
//               <span className="text-base label-text">
//                 Confirm Password
//               </span>
//             </label>
//             <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10" />
//           </div>

//           <GenderCheckbox/>

//           <a className="test-sm hover:underline hover:text-yellow-600 mt-2 inline-block" href="#" >Already have an account?</a>

//           <div>
//           <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
//         </div>
//         </form>
//       </div>  
//     </div>

    
//   )
// }

// export default SignUp;