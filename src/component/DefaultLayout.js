'use client'
import React, { useState } from "react";
import Sidebar from "@/component/Sidebar";
import Header from "@/component/Header";

const DefaultLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen ">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className="flex-1  py-4 px-16 lg:ml-3/12">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DefaultLayout;
