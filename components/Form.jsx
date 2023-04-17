import { BsPerson, BsEmojiSmile } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Form = () => {
  return (
    <div className="px-4 py-6 dark:bg-gray-800">
      <div className="flex items-center w-full gap-3">
        <div className="relative flex flex-shrink-0 w-12 h-12">
          <picture>
            <img
              className="object-cover w-full h-full rounded-full shadow-md"
              src="https://randomuser.me/api/portraits/women/33.jpg"
              alt=""
            />
          </picture>
        </div>
        <div className="grow">
          <textarea
            id="message"
            class="flex p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
          ></textarea>
        </div>
      </div>
      <div className="flex gap-2 mt-3 md:gap-5">
        <button className="flex items-center gap-1">
          <BsPerson size={20} /> People
        </button>
        <button className="flex items-center flex-none gap-1">
          <HiOutlineLocationMarker size={20} /> Check-in
        </button>
        <button className="flex items-center gap-1">
          <BsEmojiSmile size={20} /> Mood
        </button>
        <div className="text-right grow">
          <button
            type="button"
            class="py-2 px-5 text-sm focus:outline-none bg-[#1DA1F2] rounded-lg border border-gray-200 hover:bg-blue-500 focus:ring-0 dark:bg-blue-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
