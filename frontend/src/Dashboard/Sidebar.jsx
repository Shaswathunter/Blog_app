import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { CiMenuBurger } from "react-icons/ci";
import { FaLongArrowAltLeft } from "react-icons/fa";
import toast from "react-hot-toast";
import { BACKEND_URL } from "../../utils";

function Sidebar({ setComponent }) {
  const { profile, isAuthenticated, setIsAuthenticated } = useAuth();
  console.log(profile);

  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  const handleComponents = (value) => {
    setComponent(value);
  };
  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
         `${BACKEND_URL}/api/users/logout`,
        { withCredentials: true }
      );
      toast.success(data.message)
      setIsAuthenticated(false);
    } catch (error) {
      console.log(error);
      toast.error(error.data.message)

    }
  };
  const [show, setShow] = useState(false);

  const navigateTo = useNavigate();

  const gotohome = () => {
    navigateTo("/");
  };
  return (
    <>
      <div
        className=" sm:hidden fixed top-4 left-4 z-50  "
        onClick={() => setShow(!show)}
      >
        <CiMenuBurger className="text-2xl" />
      </div>
      <div
        className={`w-64 h-full shadow-lg fixed top-0 left-0 bg-gray-50 transition-transform duration-300 transform sm:translate-x-0 ${
          show ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className="sm:hidden absolute top-4 right-4 text-xl cursor-pointer "
          onClick={() => setShow(!show)}
        >
          <FaLongArrowAltLeft className="text-2xl" />
        </div>
        <div>
          <img
            className="w-24 h-24 rounded-full mx-auto mb-2"
            src={profile?.user?.photo?.url}
            alt=""
          />
          <p className="text-lg font-semibold text-center">
            {profile?.user.name}
          </p>
        </div>
        <ul className="space-y-6 mx-4">
          <button
            onClick={() => handleComponents("My Blogs")}
            className="w-full px-4 py-2 bg-green-500 rounded-lg hover:bg-green-900 transition duration-300"
          >
            MY BLOGS
          </button>
          <button
            onClick={() => handleComponents("Create Blog")}
            className="w-full px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-900 transition duration-300"
          >
            CREATE BLOG
          </button>
          <button
            onClick={() => handleComponents("My Profile")}
            className="w-full px-4 py-2 bg-pink-500 rounded-lg hover:bg-pink-900 transition duration-300"
          >
            MY PROFILE
          </button>
          <button
            onClick={gotohome}
            className="w-full px-4 py-2 bg-red-500 rounded-lg hover:bg-red-900 transition duration-300"
          >
            MY HOME
          </button>
          <button
            onClick={handleLogOut}
            className="w-full px-4 py-2 bg-yellow-500 rounded-lg hover:bg-yellow-900 transition duration-300"
          >
            LOGOUT
          </button>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
