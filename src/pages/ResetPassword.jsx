import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { resetPassword } from "../firebase";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [clickedOnReset, setClickedOnReset] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = async (event) => {
    event.preventDefault();
    try {
      await resetPassword(email);
      
      setClickedOnReset(true);
      setEmail("")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gradient-to-r from-orange-400 to-red-400">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-slate-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-red-400">
              Reset Your Password
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="bg-gray-50 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <button
                // type="submit"
                onClick={handleResetPassword}
                className="w-contain ml-[35%] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-primary-800"
              >
                Reset Password
              </button>
              {clickedOnReset && (
                <div className=" flex justify-between text-sm text-red-700 bg-red-300 p-2 rounded-lg">
                  <h1>Check Your Email To Reset Your Password &nbsp; </h1>
                  <span
                  
                  className=" cursor-pointer bg-black px-3 py-1 rounded-lg"
                  onClick={()=> setClickedOnReset(false)}
                  >
                    ❌
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <p className="text-md font-light text-gray-500 dark:text-green-400">
                  Password Resetting Done?{" "}
                  <NavLink
                    to="/login"
                    className="font-bold text-lg text-primary-600 hover:underline dark:text-primary-500 underline"
                  >
                    Login
                  </NavLink>
                </p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-md font-light text-gray-500 dark:text-blue-500">
                  Haven't an account Yet?{" "}
                  <NavLink
                    to="/register"
                    className="font-bold text-lg text-primary-600 hover:underline dark:text-primary-500 underline"
                  >
                    Sign Up
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
