import { FiFolder, FiGrid } from "react-icons/fi";
import { FaFolder } from "react-icons/fa6";
import { MdMenuOpen } from "react-icons/md";
import { useState, useEffect } from "react";
import { RiMenuUnfold3Line } from "react-icons/ri";
import Menu from "../atoms/menu";

const menuItems = [
  { icon: <FaFolder />, text: "System" },
  { icon: <FiGrid />, text: "System Code" },
  { icon: <FiGrid />, text: "Properties" },
  { icon: <FiGrid />, text: "Menus" },
  { icon: <FiGrid />, text: "API List" },
  { icon: <FiFolder />, text: "Users & Group" },
  { icon: <FiFolder />, text: "Competitions" },
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
      <div className="px-8 mt-6">
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
    <div className={`w-56 h-[42rem] bg-primary rounded-xl m-2 text-white py-3 px-4 ${isOpen ? "z-[1000]" : "hidden md:block"}`}>
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
  );
};

export default SideBar;