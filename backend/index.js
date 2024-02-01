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
app.post("/login", async (req, res) => {
  try {
    const { email } = req.body;
    const result = await userModel.findOne({ email: email });

    if (result) {
      const dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
      };
      console.log(dataSend);
      res.send({
        message: "Đăng nhập thành công !!!",
        alert: true,
        data: dataSend,
      });
    } else {
      res.send({
        message: "Email không tồn tại",
        alert: false,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Đã xảy ra lỗi trong quá trình xử lý đăng nhập",
      alert: false,
    });
  }
});
// End API login(Function handel login)
app.listen(PORT, () => console.log("sever đang chạy trên địa chỉ " + PORT));
