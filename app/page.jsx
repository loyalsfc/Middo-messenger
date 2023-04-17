// next imports
import localFont from "next/font/local";

// Components and Pages
import Sidebar from "@/components/sidebar/Sidebar";
import Form from "@/components/Form";
import Post from "@/components/Post";

const satoshiRegular = localFont({
  src: [
    {
      path: "../public/assets/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Satoshi-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

const Home = () => {
  return (
    <div className={`flex ${satoshiRegular.className}`}>
      <Sidebar />
      <div className="flex-1 overflow-hidden">
        <Form />
        <div>
          <Post />
        </div>
      </div>
    </div>
  );
};

export default Home;
