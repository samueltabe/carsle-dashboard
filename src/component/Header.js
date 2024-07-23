import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className=" p-4 flex justify-even items-center mb-20">
      <div className="flex bg-[#E3E2E2] text-center px-2 lg:px-4 py-1 rounded-full">
        <p className="text-center">Category</p>
        <MdKeyboardArrowDown size={23}/>
      </div>
      <div className="lg:ml-[600px]">
        <form action="" className="">
          <input 
            className="bg-[#E3E2E2] lg:px-8 px-2 mx-3 py-1 rounded-full w-3/4 lg:w-full"
            type="text" 
            placeholder="search" 
          />
        </form>
      </div>
      
      <div className="flex-grow"></div>
      <div className="py-3 flex justify-end">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer lg:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
      </div>
    </header>
  );
};

export default Header;
