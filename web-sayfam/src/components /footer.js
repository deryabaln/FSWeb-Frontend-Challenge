import React from "react";
import "./footer.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

const Footer = () => {

    const { t } = useTranslation();


    return (
        <div className="footer">
            <h1 className="dark:text-skills-h1" >{t("lets")}</h1>
            <span className="blue-object1"></span>
            <nav>
                <a className="text-github" href="https://github.com/deryabaln/">Github</a>
                <a id="personal" href="https://fs-web-frontend-challenge-zeta.vercel.app">{t("personal blog")}</a>
                <a className="text-linkedin" href="https://tr.linkedin.com/in/derya-balın-78314515b">Linkedin</a>
                <a className="text-email" href=" mailto: deryabalin@gmail.com">Email</a>
            </nav>
        </div>
    );
};

export default Footer;

