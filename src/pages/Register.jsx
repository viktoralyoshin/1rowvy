import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { registerUser } from "../redux/features/auth/authSlice";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { status } = useSelector((state) => state.auth);
  console.log(status)
  const dispatch = useDispatch();

  useEffect(() => {
    if(status){
      toast(status)
    }
  }, [status]);

  const handleSubmit = () => {
    try {
      dispatch(registerUser({ email, username, password }));
      setEmail("");
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex bg-page bg-no-repeat bg-cover items-center justify-center font-body ">
      <div className="bg-white flex rounded-xl mx-auto max-w-[1200px]">
        <div className="flex flex-col p-8">
          <h1 className="text-black text-[36px] py-4 font-bold">Register</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="py-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight outline-none focus:outline-none focus:bg-white focus:border-red-600 ease-in-out duration-500"
              />
            </div>
            <div className="py-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight outline-none focus:outline-none focus:bg-white focus:border-red-600 ease-in-out duration-500"
              />
            </div>
            <div className="py-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight outline-none focus:outline-none focus:bg-white focus:border-red-600 ease-in-out duration-500"
              />
            </div>
            <div className="flex items-center justify-center py-4 gap-4">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded ease-in-out duration-500"
              >
                Log In
              </button>
              <Link to="/login" className="font-bold">
                Do have an account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
