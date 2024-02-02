import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
const Newproduct = () => {
  return (
    <div className="p-4">
      <form className="m-auto w-full max-w-sm  shadow flex flex-col p-3 bg-white">
        <label htmlFor="name">Tên sản phẩm :</label>
        <input type={"text"} name="name" className="bg-slate-200 p-2 my-2" />
        <label htmlFor="category">Danh mục sản phẩm :</label>
        <select className="bg-slate-200 p-2" id="category">
          <option>Trái cây</option>
          <option>Rau củ</option>
          <option>Bánh kem</option>
          <option>Dosa</option>
          <option>Piza</option>
        </select>
        <label htmlFor="image">Hình ảnh :</label>
        <div
          id="image"
          className="h-40 w-full bg-slate-200 my-3 rounded flex flex-col justify-center items-center"
        >
          <span className="text-5xl">
            <IoCloudUploadOutline className="cursor-pointer" />
          </span>
        </div>
        <label htmlFor="price" className="my-1">
          Giá :
        </label>
        <input type="text" name="price" className="bg-slate-200 p-2 my-2" />
        <label htmlFor="description">Mô tả :</label>
        <textarea rows={3} className="bg-slate-200 p-2 my-2"></textarea>
      </form>
    </div>
  );
};

export default Newproduct;
