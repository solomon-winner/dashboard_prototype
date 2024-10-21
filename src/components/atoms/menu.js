import React from "react"
import {Link} from 'react-router-dom'

const Menu = ({icon, text}) => {
    return (
        <Link className={`flex items-center space-x-2 my-3 px-2 py-3 rounded-xl ${text === "Menus" ? "bg-secondary text-black" : "hover:bg-secondary hover:text-black"}`}>
           {icon}
           <p>{text}</p>
        </Link>
    )
}

export default Menu