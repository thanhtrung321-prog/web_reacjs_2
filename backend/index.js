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
      return res.send({ message: "Địa chỉ email đã tồn tại" });
    }

    // Email chưa tồn tại
    const data = userModel(req.body);
    const save = data.save();
    res.send({ message: "đăng ký thành công !!!" });
  } catch (error) {
    console.error("Error:", error);
    res.send({
      message: "Lỗi trong quá trình kiểm tra Email (vui lòng thử lại)",
    });
  }
});

app.listen(PORT, () => console.log("sever đang chạy trên địa chỉ " + PORT));
