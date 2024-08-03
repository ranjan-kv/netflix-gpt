import {useState} from 'react';
import Header from './Header';

const Login = () => {

const[isSiginform,setSigninform] = useState(true);
  const togglesigninform = ()=>{
     setSigninform(!isSiginform);
  }

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Header />

      <img 
        className=" inset-0 object-cover w-full h-full -z-10"
        alt="Background"
        aria-hidden="true"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_small.jpg"
      />

      <form className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="bg-black bg-opacity-70 min-h-40 p-8 rounded-lg shadow-lg  max-w-sm">
          <h2 className="text-2xl font-bold mb-4">
          {isSiginform ? "Sign In" : "Sign Up"}
          </h2>

          {!isSiginform && (
            <input 
            type="text" 
            placeholder="Name" 
            className="w-full  p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          /> 
           )}


          <input 
            type="text" 
            placeholder="Email" 
            className="w-full  p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-2 mb-6 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
           


          <button 
            type="submit" 
            className="w-full p-3 bg-red-600 rounded text-white hover:bg-red-700 transition duration-300"
          >
          {isSiginform ? "Sign In" : "Sign Up"}
          </button>

          <div className="mt-4 text-center text-sm">
            <a href="#" className="text-xl hover:underline">Forgot password?</a>
          </div>

         
          <div className="flex items-center justify-center mt-4">
            <input 
              type="checkbox" 
              id="rememberMe" 
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-sm">Remember me</label>
          </div>


          <div className="mt-4 flex items-center justify-center text-sm cursor-pointer">
            <p> {isSiginform ? "New To Netflix" : "Already Registered"} <span href="#" className="text-blue-400 hover:underline cursor-pointer" onClick={togglesigninform}> {isSiginform ? "Sign Up Now" : "Sign In"}</span></p>
          </div>

          <div className="mt-4 text-center text-xs text-gray-400">
            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" className="text-blue-400 hover:underline">Learn more.</a></p>
          </div>
          </div>
      </form>
    </div>
  );
};

export default Login;
