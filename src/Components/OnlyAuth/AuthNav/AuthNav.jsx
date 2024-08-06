import React from "react";
import blacklogo from "../../../images/LogoBlack.jpg";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { Link } from "react-router-dom";

function AuthNav({ user }) {
  return (
    <nav class="bg-black h-20 p-2 sticky z-50 inset-x-0 top-0 z-5 shadow-md ">
      <div class="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div class="text-white font-bold text-3xl mb-4 lg:mb-0 hover:text-orange-600 hover:cursor-pointer">
          <img src={blacklogo} alt="" className="h-16 mb-3" />
        </div>

        <Link to={"/"} class="text-white  px-4 py-2  hover:text-orange-600">
          <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          <small className="text-center">{user.username}</small>
        </Link>
      </div>
    </nav>
  );
}

export default AuthNav;
