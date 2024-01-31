import React, { useState } from "react";
import LoginSignupImage from "../assest/login-animation.gif";
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { Link } from "react-router-dom";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(data);
  const HandlePassword = () => {
    setShowPassword((preve) => !preve);
  };
  const HandleConfirmPassword = () => {
    setConfirmPassword((preve) => !preve);
  };
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  // catches click event(bắt sự kiện click chuột)
  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, email, password, confirmPassword } = data;
    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        alert("Thành công !!!");
      } else {
        alert("mật khẩu và mật khẩu nhập lại không trùng nhau !");
      }
    } else {
      alert("Vui lòng nhập vào các ô bắt buộc");
    }
  };
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4 ">
        {/* <h1 className="text-center text-2xl font-bold">Đăng ký tài khoản</h1> */}
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
          <img src={LoginSignupImage} className="w-full" />
        </div>
        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firstName">Tên</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="mt-1 w-full mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.firstName}
            onChange={handleOnchange}
          />
          <label htmlFor="lastName">Họ</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="mt-1 w-full mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.lastName}
            onChange={handleOnchange}
          />
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 w-full mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnchange}
          />
          <label htmlFor="password">Mật khẩu</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-slate-200 border-none outline-none"
              value={data.password}
              onChange={handleOnchange}
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
              id="confirmPassword"
              name="confirmPassword"
              className="w-full bg-slate-200 border-none outline-none"
              value={data.confirmPassword}
              onChange={handleOnchange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={HandleConfirmPassword}
            >
              {showConfirmPassword ? <BiSolidShow /> : <BiSolidHide />}
            </span>
          </div>
          <button className=" w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl text-center hover:text-black  font-medium mt-4 p-2 rounded-full">
            Đăng ký
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Bạn đã có tài khoản chưa ?
          <Link to={"/login"} className="text-red-500 underline">
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
