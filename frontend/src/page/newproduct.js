import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import { toast } from "react-hot-toast";
const Newproduct = () => {
  // handle add product
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });
  const HandleOnchange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };
  // product API
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const { name, image, category, price } = data;

    if (name && image && category && price) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMIN}/uploadProduct`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const fetchRes = await fetchData.json();

      console.log(fetchRes);
      toast(fetchRes.message, {
        style: {
          color: "green",
        },
      });

      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: "",
        };
      });
    } else {
      toast("Vui lòng nhập vào ô bắt buộc", {
        style: {
          color: "red",
        },
      });
    }
  };
  //end handle add product
  return (
    <div className="p-4">
      <form
        className="m-auto w-full max-w-sm  shadow flex flex-col p-3 bg-white"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Tên sản phẩm :</label>
        <input
          type={"text"}
          name="name"
          className="bg-slate-200 p-2 my-2  focus-within:outline-green-500"
          onChange={HandleOnchange}
        />
        <label htmlFor="category">Danh mục sản phẩm :</label>
        <select
          className="bg-slate-200 p-2"
          id="category"
          onChange={HandleOnchange}
          name="category"
        >
          <option>Trái cây</option>
          <option>Rau củ</option>
          <option>Bánh kem</option>
          <option>Dosa</option>
          <option>Piza</option>
        </select>
        <label htmlFor="image">
          Hình ảnh :
          <div className="h-40 w-full bg-slate-200 my-5 rounded flex flex-col justify-center items-center cursor-pointer">
            <span className="text-5xl">
              {data.image ? (
                <img
                  src={data.image}
                  className="min-h-40 h-full w-full rounded object-fill"
                />
              ) : (
                <IoCloudUploadOutline className="cursor-pointer" />
              )}
            </span>
            <input
              id="image"
              type="file"
              className="hidden"
              onChange={uploadImage}
              accept="image/*"
            />
          </div>
        </label>
        <label htmlFor="price" className="my-1">
          Giá :
        </label>
        <input
          type="text"
          name="price"
          className="bg-slate-200 p-2 my-2  focus-within:outline-green-500"
          onChange={HandleOnchange}
        />
        <label htmlFor="description">Mô tả :</label>
        <textarea
          rows={2}
          className="bg-slate-200 p-2 my-2 focus-within:outline-green-500 resize-none"
          onChange={HandleOnchange}
          name="description"
        ></textarea>
        <button className="w-full h-10 my-2 bg-teal-400 rounded hover:bg-teal-600">
          Lưu
        </button>
      </form>
    </div>
  );
};

export default Newproduct;
