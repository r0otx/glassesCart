import React from "react";
import cls from "./Header.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className={cls["header"]}>
            <h1 className={cls["header__title"]}>
                <a href="/">Shopping</a>
            </h1>
            <nav className={cls["header__nav"]}>
                <ul className={cls["header__nav-list"]}>
                    <li className={cls["header__nav-item"]}>
                        <NavLink to={"/"} className={cls["header__nav-link"]}>Shop</NavLink>
                    </li>
                    <li className={cls["header__nav-item"]}>
                        <NavLink to={"/cart"} className={cls["header__nav-link"]}><FontAwesomeIcon icon={faShoppingBag}/></NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;