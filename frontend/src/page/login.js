import React, { useState } from "react";
import LoginSignupImage from "../assest/login-animation.gif";
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux, setToken } from "../redux/userSlice";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  // data login
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  // next page
  const navigate = useNavigate();

  // setup eviroment login
  const userData = useSelector((state) => state);
  // function use login display ifo user
  const dispatch = useDispatch();
  // end data login
  console.log(data);
  const HandlePassword = () => {
    setShowPassword((preve) => !preve);
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
  var index = 0;
  // catches click event(bắt sự kiện click chuột)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      const fetchDatas = await fetch(
        `${process.env.REACT_APP_SERVER_DOMIN}/login`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const dataRes = await fetchDatas.json();
      console.log(dataRes);
      // function handle color text
      const messageColor = dataRes.alert ? "green" : "red";
      if (dataRes.alert === true) {
        dispatch(loginRedux(dataRes));
        setTimeout(() => {
          navigate("/");
        }, 1200);
      } else navigate("/login");
      toast(dataRes.message, {
        style: {
          color: messageColor,
        },
      });
      // End function handle color text
    } else {
      index++;
      if (index <= 3) {
        toast("Vui lòng nhập vào các ô bắt buộc", {
          style: {
            color: "red",
          },
        });
        setInterval(() => {
          index = 0;
        }, 4000);
      }
      if (index >= 3) {
        toast("Từ Từ thôi bạn ơi (vui lòng chậm lại !!!)", {
          style: {
            color: "blue",
          },
        });
      }
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

          <button className=" w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl text-center hover:text-black  font-medium mt-4 p-2 rounded-full">
            Đăng Nhập
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Bạn đã có tài khoản chưa ?
          <Link to={"/signup"} className="text-red-500 underline">
            Đăng ký tài khoản
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
