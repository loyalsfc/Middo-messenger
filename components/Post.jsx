import { AiOutlineHeart } from "react-icons/ai";
import { BsChatSquare, BsShare, BsCardImage } from "react-icons/bs";

const Post = () => {
  return (
    <div className="px-4 py-6 dark:bg-gray-800 flex flex-col justify-between">
      <div className="body-header flex gap-2 md:gap-3">
        <div className="relative flex flex-shrink-0 w-12 h-12">
          <picture>
            <img
              className="object-cover w-full h-full rounded-full shadow-md"
              src="https://randomuser.me/api/portraits/women/33.jpg"
              alt=""
            />
          </picture>
        </div>
        <div className="flex items-start flex-col">
          <p className="text-sm">
            <span className="font-semibold">John Doe</span> shared an{" "}
            <span className="font-semibold text-blue-600">album</span>
          </p>
          <p className="text-gray-400 text-sm">2 hours ago</p>
        </div>
      </div>
      <div className="main-body flex flex-col mt-3">
        <div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            temporibus exercitationem animi dolores, aut eveniet aspernatur
            officiis illum iste ducimus?
          </p>
        </div>
        <div className="relative flex flex-shrink-0 my-2">
          <picture>
            <img
              className="object-cover w-full h-full rounded-lg overflow-hidden shadow-md"
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </picture>
        </div>
        <div className="flex items-center gap-2 md:gap-5">
          <button className="flex items-center gap-1">
            <AiOutlineHeart size={20} /> 456
          </button>
          <button className="flex items-center gap-1">
            <BsChatSquare size={20} /> 200
          </button>
          <button className="flex items-center gap-1">
            <BsShare size={20} /> 34
          </button>
        </div>
      </div>
      <div className="body-footer flex items-center gap-2 w-full mt-3">
        <div className="relative flex flex-shrink-0 w-12 h-12">
          <picture>
            <img
              className="object-cover w-full h-full rounded-full shadow-md"
              src="https://randomuser.me/api/portraits/women/33.jpg"
              alt=""
            />
          </picture>
        </div>
        <form className="w-full">
          <div class="relative">
            <input
              type="search"
              id="default-search"
              class="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-0 focus:outline-none outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Leave a comment"
              required
            />
            <a type="submit" class="absolute right-2.5 bottom-2.5 px-4 py-2">
              <BsCardImage size={20} />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Post;
