import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen flex bg-page bg-no-repeat bg-cover items-center justify-center font-body ">
      <div className="bg-white flex rounded-xl mx-auto max-w-[1200px]">
        <div className="flex flex-col p-8">
          <h1 className="text-black text-[36px] py-4 font-bold">Log In</h1>
          <form>
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
                required
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
                required
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight outline-none focus:outline-none focus:bg-white focus:border-red-600 ease-in-out duration-500"
              />
            </div>
            <div className="flex items-center justify-center py-4 gap-4">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded ease-in-out duration-500"
              >
                Log In
              </button>
              <Link to="/register" className="font-bold">Don't have an account?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
