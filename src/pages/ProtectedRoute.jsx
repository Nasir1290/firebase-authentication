import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <p>Loading....</p>;
  }
  return <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>;
}
