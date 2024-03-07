import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      navigate('/login')
    } catch (err) {
      console.log(err);
    }
  };
  if (loading) {
    return <div>Loading.....</div>;
  }

  if (!user) {
    return <div>
      <h1 className=" text-xl mb-4">No user found</h1>
      <NavLink to = '/register'
        className="bg-blue-500 text-white font-bold text-md px-3 py-1 rounded-lg w-min mt-4"
        onClick={handleLogOut}
      >
        Sign In
      </NavLink>
    </div>;
  }

  return (
    <div className="flex flex-col bg-slate-600 text-white w-screen h-screen">
      <h1>Welcome, {user.email}</h1>
      <button
        className="bg-blue-500 text-black font-bold text-md px-3 py-1 rounded-lg w-min mt-4"
        onClick={handleLogOut}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
