import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "./logo.svg";
import { useNavigate } from "react-router";
import axios from "axios";
import Profile from "./Profile";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const fetchUserData = async (email) => {
    try {
      const response = await axios.get(
        "https://gingermedia-wdfm.onrender.com/user/getUserDetails?email=" +
          email
      );
      setUserData(response.data);
    } catch (error) {
      console.error("Error occurred while fetching user details:", error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://gingermedia-wdfm.onrender.com/user/login",
        {
          email,
          password,
        }
      );

      if (response.statusText === "OK") {
        setEmail(response.data.email);
        fetchUserData(response.data.email);
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
    }
  };

  const handleRegister = () => {
    navigate("/");
  };

  return (
    <>
      {!userData && (
        <div className="flex justify-center items-center gap-5">
          <img src={logo} alt="" className="-ml-10" />
          <div className="flex items-center justify-center flex-col lg:flex-row">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col text-center bg-shadow pl-5 p-7 mb-1 test rounded-sm lg:mt-12"
            >
              <h1 className="font-bold text-lg relative text-[#1A1A1A] -top-1">
                Login
              </h1>

              <div className="flex flex-col">
                <div>
                  <MdEmail className="inline text-[#FF6702]  relative left-7 text-lg -top-[1px]" />
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-center rounded-sm border-2 p-1 m-1 placeholder-[#1A1A1A] focus:outline-[#FF6702]  w-60"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div>
                  <FaLock className="inline text-[#FF6702] relative left-7 -top-[1px]" />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-center rounded-sm border-2 p-1 m-1 placeholder-[#1A1A1A] focus:outline-[#FF6702]  w-60 mb-2"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                  />
                </div>
              </div>

              <button
                onClick={() => handleLogin()}
                className="p-1 rounded-sm bg-[#FF6702] relative left-2 text-white font-bold hover:bg-[#e76854] duration-300"
              >
                Login
              </button>

              <p className=" text-[#1A1A1A] m-1">
                Don't have an account ?
                <span
                  onClick={() => handleRegister()}
                  className="text-[#FF6702] ml-1 cursor-pointer"
                >
                  Register
                </span>
              </p>
            </form>
          </div>
        </div>
      )}
      {userData && <Profile data={userData} />}
    </>
  );
};

export default Login;
