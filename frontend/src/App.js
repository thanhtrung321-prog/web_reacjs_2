import React from "react";
import "./App.css";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <main className="pt-16 ">
        {/* thêm cái này để hiển thị các thành phần có trong Menu */}
        <Outlet />
      </main>
    </div>
  );
}

export default App;
