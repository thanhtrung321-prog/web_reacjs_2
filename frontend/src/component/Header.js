import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo_thanhtrung from "../assest/logo.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsFillCartFill } from "react-icons/bs";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import toast, { Toaster } from "react-hot-toast";
const Header = () => {
  const [ShowMenu, setShowMenu] = useState(false);
  // show user
  const userData = useSelector((state) => state.user);
  console.log(userData);
  const dispath = useDispatch();
  // End show user
  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };
  // handle logout user
  const handleLogout = () => {
    dispath(logoutRedux());
    toast("đăng xuất thành công !!", {
      style: {
        color: "green",
      },
    });
  };
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
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
          <div className=" text-slate-600" onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer">
              {userData.image ? (
                <img
                  src={userData.image}
                  className="w-10 h-10 object-cover drop-shadow rounded-full cursor-pointer overflow-hidden"
                />
              ) : (
                <HiOutlineUserCircle />
              )}
            </div>
            {ShowMenu && (
              <div className="absolute right-2 text-center  bg-white py-2 p-2  shadow drop-shadow-md flex flex-col">
                <Link
                  to={"newproduct"}
                  className="white-space-nowrap cursor-pointer text-white bg-red-500 hover:bg-black "
                >
                  Thêm Sản phẩm mới
                </Link>
                {userData.image ? (
                  <div className="flex flex-col">
                    <Link
                      to={"account-info"}
                      className="whitespace-nowrap cursor-pointer pt-1 text-white bg-red-500 hover:bg-black "
                    >
                      Thông tin tài khoản
                    </Link>
                    <Link
                      className="whitespace-nowrap cursor-pointer pt-1 text-white bg-red-500 hover:bg-black "
                      onClick={handleLogout}
                    >
                      Đăng xuất
                    </Link>
                  </div>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap cursor-pointer text-white bg-red-500 hover:bg-black"
                  >
                    Đăng nhập
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* mobile */}
    </header>
  );
};

export default Header;
