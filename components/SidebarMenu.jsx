//React-icons
import { BsBookmarkFill, BsPeopleFill } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";

// Pages and Components
import ThemeToggler from "./ThemeToggler";

const SidebarMenu = () => {
  return (
    <>
      <ul>
        <li className="flex gap-3 items-center p-3 hover:bg-gray-800 hover:text-white rounded-lg font-semibold">
          <span className="rounded-full p-2 bg-[#f26419]">
            <BiHome size={20} />
          </span>
          Home
        </li>
        <li className="flex gap-3 items-center p-3 hover:bg-gray-800 hover:text-white rounded-lg font-semibold">
          <span className="rounded-full p-2 bg-[#20bafc]">
            <IoMdNotifications size={20} className="text-[#0077b6]" />
          </span>
          Notifications
        </li>
        <li className="flex gap-3 items-center p-3 hover:bg-gray-800 hover:text-white rounded-lg font-semibold">
          <span className="rounded-full p-2 bg-[#f6b02d]">
            <BsPeopleFill size={20} className="text-amber-700" />
          </span>
          Friends
        </li>
        <li className="flex gap-3 items-center p-3 hover:bg-gray-800 hover:text-white rounded-lg font-semibold">
          <span className="rounded-full p-2 bg-[#34a0a4]">
            <BsBookmarkFill size={20} className="text-[#1e6091]" />
          </span>
          Saved posts
        </li>
        <li className="flex gap-3 items-center p-3 hover:bg-gray-800 hover:text-white rounded-lg font-semibold">
          <ThemeToggler />
        </li>
      </ul>
    </>
  );
};

export default SidebarMenu;
