import { FaFacebook, FaLinkedin, FaTelegram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import pic from "../assets/bubuPs.png";

function Home() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 mt-6">
        <div className="flex flex-col md:flex-row">
          {/* Text Content */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-6 order-2 md:order-1">
            <span className="text-xl">Welcome to my Feed</span>
            <div className="flex space-x-2 text-2xl md:text-4xl">
              <h1>Hello, I&#39;m a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae non expedita minima aspernatur voluptates a, itaque
              voluptatibus excepturi rerum! Praesentium fuga provident impedit
              quo, eveniet consequatur laudantium quas repellendus numquam?
            </p>

            {/* Social Media Section */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              {/* Social Media Links */}
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-7 justify-center md:justify-start">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-700" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.t.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTelegram className="text-2xl cursor-pointer hover:text-blue-400" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoYoutube className="text-2xl cursor-pointer hover:text-red-600" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Technologies Section */}
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently Working on</h1>
                <ul className="flex space-x-7 justify-center md:justify-start">
                  <li>
                    <SiMongodb className="text-green-600 text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] border-green-600 p-1" />
                  </li>
                  <li>
                    <SiExpress className="text-gray-600 text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] border-gray-600 p-1" />
                  </li>
                  <li>
                    <FaReact className="text-blue-500 text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] border-blue-500 p-1" />
                  </li>
                  <li>
                    <FaNodeJs className="text-green-500 text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] border-green-500 p-1" />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 md:ml-48 mt-20 order-1">
            <img
              src={pic}
              className="md:h-[400px] md:w-[400px] rounded-full"
              alt="Developer"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
export default Home;
