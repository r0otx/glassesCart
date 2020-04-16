import React from "react";
import cls from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={cls["footer"]}>
            <div className={cls["footer__item-copyright"]}>
                &copy; Test task for GlassesUSA
            </div>
        </footer>
    );
};

export default Footer;