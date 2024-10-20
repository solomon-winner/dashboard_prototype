
import { FaFolder } from "react-icons/fa6";

const BreadCram = () => {
  return (
    <div className="flex items-center space-x-2">
        <FaFolder className="text-gray-300"/>
        <span className="text-gray-200">/</span>
        <span className="">Menus</span>
    </div>
  );
};

export default BreadCram;
