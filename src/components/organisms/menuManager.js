import { BsFillGridFill } from "react-icons/bs";
import BreadCram from "../atoms/breadCrumb";
import MenuForm from "../molecules/menuForm";
import MenuLeft from "../molecules/menuLeft";
import { useRecoilValue , useSetRecoilState} from 'recoil';
import { formVisibilityState } from '../../state/visibilityState';
import { menuState } from '../../state/state';
import { useState } from "react";

const MenuManager = () => {
  const [form, setForm] = useState(false);
  const isFormVisible = useRecoilValue(formVisibilityState);
  const setFormVisible = useSetRecoilState(formVisibilityState);

  const menus = useRecoilValue(menuState);

  if (menus.data.length === 0) {
    setFormVisible(true);
  }
  return (
    <div className="p-4 overflow-x-hidden">
      <BreadCram />
      <div className="flex items-center space-x-4 text-3xl mt-8">
        <div className="bg-blue-700 w-[3rem] h-[3rem] flex items-center justify-center rounded-full">
          <BsFillGridFill className="text-white w-5 h-5"  />
        </div>
        <span className="font-bold">Menus</span>
      </div>
      <div className="flex flex-col justify-center mt-4">
        <label>Menu</label>
        <select className="mt-2 bg-gray-50 p-2 w-[20rem]">
          <option value="1">System management</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 ">
        <MenuLeft/>
        {isFormVisible && <MenuForm />}
      </div>
    </div>
  );
};

export default MenuManager;