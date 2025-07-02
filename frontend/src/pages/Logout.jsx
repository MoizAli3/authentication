import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Correct import
import Swal from "sweetalert2";
import axios from "axios";



function Logout() {
  const navigate = useNavigate();
  const baseURL = "https://credentials-backend-jfce.onrender.com/";
  const devlopURL = "http://localhost:3000/";

  const handleLogoutUser = async () => {
    try {
      await axios
        .post(`${baseURL}v1/logout`, {}, { withCredentials: true })
        .then(() => {
          navigate("/login");
          return Swal.fire({
            icon: "success",
            title: "Logged out successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error("Logout failed:", error);
      Swal.fire({
        icon: "error",
        title: "Logout failed",
        text: "Please try again",
      });
    }
  };

  return (
    <div className="flex justify-around mt-4">
      <div className="font-bold text-2xl">Dev</div>
      <button
        type="button"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={handleLogoutUser}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
