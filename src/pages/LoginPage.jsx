import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginWthEmailAndPassword, socialLogin } from "../firebase";
import googleIcon from "../assets/googlePic.webp";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await loginWthEmailAndPassword(email, password);
      navigate("/");
      setEmail("");
      setPassword("");
    } catch (error) {
      setErr(error);
      console.log(error);
    }
  };

  const handleSocialLogin = async () => {
    try {
      await socialLogin();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="bg-gray-50 dark:bg-gradient-to-r from-blue-500 to-green-400">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-slate-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit}
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
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                {err && (
                  <div className=" flex justify-between text-sm text-white bg-red-500 p-1 rounded-lg mt-2">
                    <h1> User Not Found. Provide Correct Info... </h1>
                    <span
                      className=" cursor-pointer bg-black px-3 rounded-lg"
                      onClick={() => setErr(false)}
                    >
                      ❌
                    </span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-contain ml-[40%] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-400 dark:focus:ring-primary-800"
              >
                Log In
              </button>

              <div className=" flex flex-col text-white font-bold items-center">
                <p> ----- Or Log In With -----</p>
                <div className=" flex items-center gap-4 mt-4">
                  <button
                    className=" p-2 bg-slate-200 rounded-full"
                    onClick={handleSocialLogin}
                  >
                    <img src={googleIcon} alt="google icon" className="w-8" />
                  </button>
                </div>
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
                <NavLink
                  to="/resetPassword"
                  href="#"
                  className="text-sm  font-medium text-primary-600 hover:underline dark:text-white bg-red-400 px-2 py-1 rounded-sm"
                >
                  Forgot password?
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
