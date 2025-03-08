import { IoIosNotificationsOutline } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { useSetRecoilState } from "recoil";
import { isAuthenticatedState } from "../../state/state";

export const NavBar = () => {
    const setAuthenticated = useSetRecoilState(isAuthenticatedState);
    const handleLogOut =()=> {
        localStorage.clear();
        setAuthenticated(false);
    }
    return(
        <div className="bg-white transition-transform transform flex flex-col align-middle shadow mb-5 fixed top-0 right-0 w-[100%] z-20">
        <div className="text-2xl font-bold my-4 align-text-bottom justify-around ml-auto flex w-[10%]" id="bnav">
        <IoIosNotificationsOutline/>
        <IoLogOutOutline className="cursor-pointer" onClick={handleLogOut}/>
    </div>
    </div>

    )
}