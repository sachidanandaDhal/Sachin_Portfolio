import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";
import pic from "../../public/bubuPs.png";
export default function Home() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4  h-16 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In my Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello,I&#39;m a</h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae non expedita minima aspernatur voluptates a, itaque
              voluptatibus excepturi rerum! Praesentium fuga provident impedit
              quo, eveniet consequatur laudantium quas repellendus numquam?
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-7">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                    <FaFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                  <a href="https://www.linkedin.com/" target="_blank">
                  <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                    
                  </li>
                  <li>
                  <a href="https://www.t.me/" target="_blank">
                  <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                   
                  </li>
                  <li>
                  <a href="https://www.youtube.com/" target="_blank">
                  <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                    
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently Working on</h1>
                <ul className="flex space-x-7">
                  <li>
                    <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                  <li>
                    <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                  <li>
                    <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                  <li>
                    <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            {/* Social media End */}
          </div>
          <br />
          <div className="md:w-1/2 md:ml-48 mt-20 order-1">
            <img
              src={pic}
              className="md:h-[400px] md:w-[400px] rounded-full"
              alt=""
            />
          </div>
        </div>
        <br />
        <hr />
      </div>
    </>
  );
}
