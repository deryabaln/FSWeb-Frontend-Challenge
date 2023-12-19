import React from "react";
import "./profile.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

const Profile = () => {

    const { t } = useTranslation();


    return (
        <div className="profile-container dark:text-skills-h1 dark:bg-hero-bg">
            <h1 className="dark:text-skills-h1" >{t("profile")}</h1>
            <div className="profile">
                <div className="information dark:bg-circle-bg">
                    <h3 className="text-pinky ml-8 mt-8 mb-9">{t("information")}</h3>
                    <h6>{t("date")}</h6>
                    <p>25.11.1997</p>
                    <h6>{t("place")}</h6>
                    <p>ELAZIĞ</p>
                    <h6>{t("education")}</h6>
                    <p>Kırklareli Ünv. Beslenme ve Diyetetik Lisans, 2020</p>
                    <h6>{t("role")}</h6>
                    <p>Full Stack (Frontend, UI, Backend)</p>
                </div>
                <div className="about">
                    <h3 className="dark:text-skills-h1">{t("about")}</h3>
                    <span className="blue-object"></span>
                    <p className="dark:text-skills-h1">{t("personal information1")}</p>
                    <p className="dark:text-skills-h1">{t("personal information2")}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
