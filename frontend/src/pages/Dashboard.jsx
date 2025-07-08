import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import Sidebar from "../Dashboard/Sidebar";
import MyProfile from "../Dashboard/MyProfile";
import MyBlog from "../Dashboard/MyBlogs"
import CreateBlog from "../Dashboard/CreateBlog"
import UpdateBlog from "../Dashboard/UpdateBlog"

const Dashboard = () => {
  const { profile, isAuthenticated } = useAuth();
  const [component,setComponent]=useState("My Blogs")

  console.log(profile);

  console.log(isAuthenticated);

  return (
    <div>
      <div>
        <Sidebar component={component} setComponent={setComponent} />
        {component === "My Profile" ? (
          <MyProfile />
        ) : component === "Create Blog" ? (
          <CreateBlog />
        ) : component === "Update Blog" ? (
          <UpdateBlog />
        ) : (
          <MyBlog />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
