const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;
// MONGGODB CONNECTION
console.log(process.env.MONGGODB_URL);
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGGODB_URL)
  .then(() => console.log("kết nối database thành công !"))
  .catch((err) => console.log(err));

// kế hoạch(tạo ra csdl)
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});
// end kế hoạch(tạo ra csdl)

const userModel = mongoose.model("user", userSchema);
// API Mongodb sever
app.get("/", (req, res) => {
  res.send("sever đang chạy");
});
// đăng ký thành viên
app.post("/signup", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res
        .status(400)
        .json({ error: "Vui lòng cung cấp địa chỉ email." });
    }

    const existingUser = await userModel.findOne({ email: email });

    if (existingUser) {
      // Email đã tồn tại
      return res.send({ message: "Địa chỉ email đã tồn tại", alert: false });
    }

    // Email chưa tồn tại
    const data = userModel(req.body);
    const save = data.save();
    res.send({ message: "đăng ký thành công !!!", alert: true });
  } catch (error) {
    console.error("Error:", error);
    res.send({
      message: "Lỗi trong quá trình kiểm tra Email (vui lòng thử lại)",
      alert: false,
    });
  }
});
// API login(Function handel login)
// Biến toàn cục để theo dõi số lần thất bại
let loginindex = 0;

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });

    if (user && password === user.password) {
      res.status(200).json({
        message: "Đăng nhập thành công",
        alert: true,
        data: user,
      });
    } else {
      loginindex++;

      if (loginindex <= 3) {
        res.status(404).json({
          message:
            "Sai tài khoản Email hoặc mật khẩu (vui lòng kiểm tra lại)!!!",
          alert: false,
        });
      } else {
        res.status(400).json({
          message: "Cứ từ từ Bạn đang spam quá nhanh !!!",
          alert: false,
        });

        // Đặt lại số lần thất bại sau khi đạt đến giới hạn
        loginindex = 0;
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Đã xảy ra lỗi trong quá trình xử lý đăng nhập",
      alert: false,
    });
  }
});

// API ADD product
// add CSDL MONGODB
const schemaProduct = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: String,
  description: String,
});
const productModel = mongoose.model("product", schemaProduct);
// END ADD product
//Save product in database Mongodb
app.post("/uploadProduct", async (req, res) => {
  // console.log(req.body)
  const data = await productModel(req.body);
  const datasave = await data.save();
  res.send({ message: "Thêm thành công sản phẩm" });
});

//
app.get("/product", async (req, res) => {
  const data = await productModel.find({});
  res.send(JSON.stringify(data));
});
// END Save product in database Mongodb
//----------------------------------------//
//----------------------------------------//
// Start function take database user

//END function take database user
// End API login(Function handel login)
app.listen(PORT, () => console.log("sever đang chạy trên địa chỉ " + PORT));
