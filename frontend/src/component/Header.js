import React from "react";
import { Link } from "react-router-dom";
import logo_thanhtrung from "../assest/logo.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsFillCartFill } from "react-icons/bs";

const Header = () => {
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50">
      {/* desktop */}
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-12">
            <img src={logo_thanhtrung} alt="" className="h-full" />
          </div>
        </Link>
        <div className="flex items-center gap-4 md:gap-7">
          <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
            <Link to={""}>Trang chủ</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-2xl text-slate-600 relative">
            <BsFillCartFill />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
              0
            </div>
          </div>
          <div className=" text-slate-600">
            <div className="text-3xl cursor-pointer">
              <HiOutlineUserCircle />
            </div>
            <div className="absolute ">
              <p className="white-space-nowrap">Sản phẩm mới</p>
              <p className="whitespace-nowrap">Đăng nhập</p>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
    </header>
  );
};

export default Header;
