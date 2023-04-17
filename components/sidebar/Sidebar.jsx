"use client";

// React-icons
import { GrClose } from "react-icons/gr";
import { GrPower } from "react-icons/gr";
import { CgChevronUpO } from "react-icons/cg";

//Pages and Components
import SidebarMenu from "../SidebarMenu";
import { useSidebarContext } from "@/context/SidebarContext";

import { useContext } from "react";
import { SidebarContext } from "@/context/SidebarContext";

const Sidebar = () => {
  // const useSidebarContext = () => useContext(SidebarContext);
  const { open, toggleMenu } = useSidebarContext();

  return (
    <>
      <div className="flex items-end justify-end h-screen bg-teal-500 dark:bg-gray-800">
        <button
          className="fixed flex items-center justify-center w-10 h-10 text-4xl duration-300 rounded-full lg:hidden z-90 bottom-10 right-8 drop-shadow-lg hover:bg-[#20b9fc]"
          onClick={toggleMenu}
        >
          <CgChevronUpO size={25} />
        </button>
        <div
          className={`flex flex-col justify-between overflow-hidden lg:w-96 transition-all duration-300 ease-in-out min-h-screen ${
            open ? "xs:w-50 sm:w-72 px-2" : "w-0"
          }`}
        >
          <div className="flex items-center justify-between p-4">
            <div className="relative text-center">
              <h1 className="text-3xl font-semibold md:text-4xl">
                Middo
                <span className="bg-[#20b9fc] rounded-full h-1.5 w-1.5 absolute top-6 lg:top-7"></span>
              </h1>
            </div>
            <button
              className="flex items-center mt-1 lg:hidden"
              onClick={toggleMenu}
            >
              <GrClose fontSize={20} className="text-white" />
            </button>
          </div>

          {/* Sidebar Menu */}
          <div className="items-center p-4">
            <SidebarMenu />
          </div>

          {/* Logout Button */}
          <div className="items-center p-4">
            <a className="flex items-center gap-3 p-3 font-semibold rounded-lg hover:bg-gray-800 hover:text-white">
              <span className="p-2 bg-red-600 rounded-full">
                <GrPower size={20} />
              </span>{" "}
              Logout
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
