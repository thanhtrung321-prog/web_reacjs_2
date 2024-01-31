import React, { useState } from "react";
import LoginSignupImage from "../assest/login-animation.gif";
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);
  const HandlePassword = () => {
    setShowPassword((preve) => !preve);
  };
  const HandleConfirmPassword = () => {
    setConfirmPassword((preve) => !preve);
  };

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4">
        {/* <h1 className="text-center text-2xl font-bold">Đăng ký tài khoản</h1> */}
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md">
          <img src={LoginSignupImage} className="w-full" />
        </div>
        <form className="w-full py-3">
          <label htmlFor="firstName">Tên</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="mt-1 w-full mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          />
          <label htmlFor="lastName">Họ</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="mt-1 w-full mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          />
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 w-full mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          />
          <label htmlFor="password">Mật khẩu</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-slate-200 border-none outline-none"
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={HandlePassword}
            >
              {showPassword ? <BiSolidShow /> : <BiSolidHide />}
            </span>
          </div>
          <label htmlFor="confirmpassword">Xác nhận mật khẩu</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmpassword"
              name="confirmpassword"
              className="w-full bg-slate-200 border-none outline-none"
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={HandleConfirmPassword}
            >
              {showConfirmPassword ? <BiSolidShow /> : <BiSolidHide />}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
