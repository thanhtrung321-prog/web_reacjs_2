import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Inforusers = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div className="flex bg-slate-300 w-full h-[100vh] m-auto items-center p-8">
      <div className="bg-blue-300 p-4 rounded-md flex ">
        <div className="p-4 rounded-md mr-8 text-center ">
          <h3 className="text-2xl mb-2">Hình ảnh:</h3>
          <img
            src={userData.image}
            id="image-user"
            className="image-user w-20 h-20 rounded-full"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center text-xl mb-2">
            <span className="font-bold mr-2">Tên chủ sở hữu tài khoản:</span>
            <p>{userData.firstName}</p>
          </div>
          <div className="flex items-center text-xl mb-2">
            <span className="font-bold mr-2">Tên Đệm:</span>
            <p>{userData.lastName}</p>
          </div>
          <div className="flex items-center text-xl">
            <span className="font-bold mr-2">Email:</span>
            <p>trung@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col ml-5">
          <p className="font-bold mr-2 bg-slate-500 rounded text-white cursor-pointer p-2 hover:bg-slate-700">
            Đổi mật khẩu
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inforusers;
