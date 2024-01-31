import React from "react";
import "./App.css";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
          {/* thêm cái này để hiển thị các thành phần có trong Menu */}
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
