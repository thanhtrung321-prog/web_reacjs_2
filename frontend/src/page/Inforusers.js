import React from "react";
import { useSelector } from "react-redux";

const Inforusers = () => {
  const userData = useSelector((state) => state.user);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-4 py-8 h-screen">
      <div className="flex flex-col bg-blue-300 rounded-lg shadow-md w-full md:max-w-md mx-auto">
        <div className="flex items-center justify-center px-4 py-4">
          <h3 className="text-2xl font-bold">Hình ảnh:</h3>
        </div>
        <div className="flex flex-col items-center justify-center px-4 py-4">
          <img
            src={userData.image}
            id="image-user2"
            className="w-60 h-60 md:w-full md:h-auto object-cover md:rounded-none"
            alt=""
          />
          <label className="mt-4 bg-slate-300 rounded-lg px-4 py-2 text-center cursor-pointer hover:bg-slate-400">
            <h4 className="text-base font-medium">Cập nhật hình ảnh</h4>
            <input type="file" id="profileimage" className="hidden" />
          </label>
        </div>
        <div className="px-4 py-4 space-y-4 text-center">
          <div className="flex flex-col items-center">
            <span className="font-bold mr-2">Tên chủ sở hữu tài khoản:</span>
            <p className="text-lg">{userData.firstName}</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold mr-2">Tên Đệm:</span>
            <p className="text-lg">{userData.lastName}</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold mr-2">Email:</span>
            <p className="text-lg">{userData.email}</p>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 py-4">
          <button className="bg-slate-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-slate-600">
            Đổi mật khẩu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inforusers;
