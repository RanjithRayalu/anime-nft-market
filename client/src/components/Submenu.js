import "./Submenu.css";
import React from "react";
import { NavLink } from "react-router-dom";


const Submenu = () => {

    const navLinkStyles = ({isActive}) => {
        return { 
            color: isActive 
            ? "var(--primary-dark)" 
            : "var(--color-txt)" 
        }
    }

    return (
        <ul className="nav-submenu">
            <li>
                <NavLink style={navLinkStyles} to={"/category-1"} className='nav-submenu-item'>
                    dragon ball
                </NavLink>
            </li>
            <li>
                <NavLink style={navLinkStyles} to={"/category-2"} className='nav-submenu-item'>
                    one piece
                </NavLink>
            </li>
            <li>
                <NavLink style={navLinkStyles} to={"/category-3"} className='nav-submenu-item'>
                    naruto
                </NavLink>
            </li>
            <li>
                <NavLink style={navLinkStyles} to={"/category-4"} className='nav-submenu-item'>
                    bleach
                </NavLink>
            </li>
            <li>
                <NavLink style={navLinkStyles} to={"/category-5"} className='nav-submenu-item'>
                    opm
                </NavLink>
            </li>
        </ul>
    );
};


export default Submenu;