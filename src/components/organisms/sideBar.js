import { GrUpdate } from "react-icons/gr";
import { FaMailBulk } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { GiLoveSong } from "react-icons/gi";
import { MdMenuOpen } from "react-icons/md";
import { useState, useEffect } from "react";
import { RiMenuUnfold3Line } from "react-icons/ri";
import Menu from "../atoms/menu";

const menuItems = [
  { icon: <GiLoveSong />, text: "Songs" },
  { icon: <HiSpeakerphone />, text: "Testimonies" },
  { icon: <FaMailBulk />, text: "Subscribers" },
  { icon: <GrUpdate />, text: "Update information" },
  { icon: <IoMdSettings />, text: "Settings" },
];

const SideBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="px-8 mt-6 z-50">
        <RiMenuUnfold3Line
          className="text-xl cursor-pointer text-black"
          onClick={handleToggle}
        />
        {isOpen && (
          <div className="absolute top-0 left-0 w-56 h-[91%] bg-primary rounded-xl m-2 text-white py-3 px-4">
            <div className="flex justify-between items-center">
            <img src="./assets/image.png" alt="logo" className="w-[70px] h-[21px] mt-2"/>
            <MdMenuOpen onClick={handleToggle} className="cursor-pointer" />
            </div>
            <div className="mt-5">
              {menuItems.map((item) => (
                <Menu key={item.text} icon={item.icon} text={item.text} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`w-56 h-[37.5rem] bg-green-900 rounded-xl m-2 text-white py-3 px-4 ${isOpen ? "z-[1000]" : "hidden md:block"} fixed z-[1000]` }>
      <div className="flex justify-between items-center">
        <div></div>
        <MdMenuOpen onClick={handleToggle} className="cursor-pointer" />
      </div>
      <div className="mt-5 cursor-pointer">
        {menuItems.map((item) => (
          <Menu key={item.text} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;