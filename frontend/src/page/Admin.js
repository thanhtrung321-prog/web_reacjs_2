import React, { useSelector, useState } from "react-redux";
import { Link } from "react-router-dom";

const Admin = () => {
  const userData = useSelector((state) => state.user);
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">ADMIN: {userData.firstName}</h1>
        <nav className="space-x-4">
          <Link to="/bangdieukhien">
            <a className="text-blue-500"> Bảng Điều khiển</a>
          </Link>
          <a href="#" className="text-blue-500">
            Danh sách người dùng
          </a>
          <a href="#" className="text-blue-500">
            Danh sách sản phẩm
          </a>
          <a href="#" className="text-blue-500">
            Cài đặt
          </a>
        </nav>
      </header>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">
          Chào Mừng bạn đến Trang quản trị
        </h2>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600">
          Tạo mới
        </button>
      </div>
    </div>
  );
};

export default Admin;
