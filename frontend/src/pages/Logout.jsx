import React from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";

function Logout() {
  const navigate = useNavigate();
  const baseURL = "https://credentials-backend-jfce.onrender.com/";
  const devlopURL = "http://localhost:3000/";

  const handleLogoutUser = async () => {
    await axios
      .post(`${baseURL}v1/logout`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then(() => {
        navigate("/login");
        return Swal.fire({
          title: "Logout!",
          text: "You Successfully Logout a Account!",
          icon: "success",
        });
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
        console.log(error);
      });
  };

  return (
    <div className="flex justify-around mt-4 ">
      <div className="font-bold text-2xl ">Dev</div>
      <button
        type="button"
        class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={handleLogoutUser}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
