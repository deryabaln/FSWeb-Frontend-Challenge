import React from "react";
import "./hero.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Toggle from "./Toggle";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Hero = ({ handleLanguageChange, handleClickDarkMode, darkMode, currentLanguage }) => {


  const { t } = useTranslation();


  return (
    <div>
      <div className="hero dark:bg-hero-bg ">
        <div className="half-circle dark:bg-circle-bg"  ></div>
        <div className="header-container">
          <div className="header">
            <Toggle toggled={darkMode} onClick={handleClickDarkMode} />
            <span className="ml-1 mr-2  dark:text-white">{darkMode ? t("LIGHT MODE") : t("DARK MODE")}</span>
            <button onClick={handleLanguageChange}>
              {currentLanguage === "tr" ?
                <p className="dark:text-darkmode-text"> | <span className="text-red-700 ">İngilizce'ye</span> çevir</p>
                : <p className="dark:text-darkmode-text">| Translate to<span className="text-red-700" > Turkish</span></p>}
            </button>
          </div>
        </div>
        <div className="entrance-container">
          <div className="entrance">
            <p className="text-xl  dark:text-white ">{t("hi")}</p>
            <h2 className=" dark:text-white ">{t("first text")}</h2>
            <span className="pink-object1"></span>
            <img src={require('../png/Resim1.png')} alt=""></img>
            <div className="contact">
              {!darkMode ?
                <div className="contact-img">
                  <FontAwesomeIcon  id="contact" icon={faLinkedinIn} style={{ color: "#000000", }} />
                  <FontAwesomeIcon id="contact" icon={faGithub} />
                </div> :
                <div className="contact-img">
                  <FontAwesomeIcon id="contact" icon={faLinkedinIn} style={{ color: "#ffffff", }} />
                  <FontAwesomeIcon id="contact" icon={faGithub} style={{ color: "#ffffff", }} />
                </div>}

              <p className=" dark:text-white pb-5 ">Currently <span style={{ color: "#AF0C48" }}>Freelancing </span>for <span style={{ color: "#AF0C48" }}>UX, UI, & Web Design</span> Project .
                Invite me to join your team - <span style={{ color: "#AF0C48" }}>pratamaiosi@gmail.com</span></p>
            </div>
          </div>
          <div className="pink-object"></div>
        </div>
      </div>
      <div className="outer-circle">
        <div className="inner-circle dark:border-circle-bg"></div>
      </div>
    </div>
  );
};

export default Hero;
