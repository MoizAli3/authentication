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


  const handleSentOtp = async () => {
    try {
      await axios
        .post(`${devlopURL}v1/sentcode`, {}, { withCredentials: true })
        .then(() => {
          navigate("/verify-account");
          return Swal.fire({
            icon: "success",
            title: "Otp Sent to the Email",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error("Otp Sent failed:", error);
      Swal.fire({
        icon: "error",
        title: "Otp Sent failed",
        text: "Please try again",
      });
    }
  }

  return (
    <div className="flex justify-around mt-4">
      <div className="font-bold text-2xl">Dev</div>
      <div>
        <button onClick={handleSentOtp} class="bg-gray-100 text-gray-800 text-md font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
         unverified
        </button>
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={handleLogoutUser}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Logout;
