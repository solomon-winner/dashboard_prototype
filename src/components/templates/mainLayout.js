import { Outlet } from "react-router-dom";
import { NavBar } from "../atoms/navbar"
import SideBar from "../organisms/sideBar"

const Layout = () => {
    return (
        <div className="flex">
            <SideBar />
            <div className="flex-1">
                <NavBar />
                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout;