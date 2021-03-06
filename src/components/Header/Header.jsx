import React, {useState} from "react";
import cls from "./Header.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom'
import {useSelector} from "react-redux";

const Header = () => {

    const [largerFont, toggleFont] = useState(false);
    const login = useSelector(state => state.authPage.profile);

    if (largerFont) {
        document.documentElement.classList.add('font-zoom');
    } else {
        document.documentElement.classList.remove('font-zoom');
    }

    return (
        <header className={cls["header"]}>
            <h1 className={cls["header__title"]}>
                <NavLink to={"/"}>Shopping</NavLink>
            </h1>
            <nav className={cls["header__nav"]}>
                <ul className={cls["header__nav-list"]}>
                    <li className={cls["header__nav-item"]}>
                        <div onClick={() => toggleFont(!largerFont)} className={cls["header__nav-link"]}>aA</div>
                    </li>
                    <li className={cls["header__nav-item"]}>
                        <NavLink to={"/"} className={cls["header__nav-link"]}>Shop</NavLink>
                    </li>
                    {login.length === 0
                        ?  <li className={cls["header__nav-item"]}>
                            <NavLink to={"/auth"} className={cls["header__nav-link"]}>Login</NavLink>
                           </li>
                        : <li className={cls["header__nav-item"]}>
                            <NavLink to={"/auth"} className={cls["header__nav-link"]}>{login.user.email}</NavLink>
                        </li>}
                    <li className={cls["header__nav-item"]}>
                        <NavLink to={"/cart"} className={cls["header__nav-link"]}><FontAwesomeIcon icon={faShoppingBag}/></NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;