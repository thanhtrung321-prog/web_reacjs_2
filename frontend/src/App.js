import React from "react";
import "./App.css";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
        {/* thêm cái này để hiển thị các thành phần có trong Menu */}
        <Outlet />
      </main>
    </div>
  );
}

export default App;
