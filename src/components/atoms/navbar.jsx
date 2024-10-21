import { IoIosNotificationsOutline } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";

export const NavBar = () => {
    return(
        <div className="text-2xl font-bold my-4 align-text-bottom justify-around ml-auto flex w-[10%]" id="bnav">
        <IoIosNotificationsOutline/>
        <IoLogOutOutline/>
    </div>
    )
}