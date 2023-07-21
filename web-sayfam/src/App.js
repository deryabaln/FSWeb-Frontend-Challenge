import React, { useEffect, useState } from "react";
import Hero from "./components /hero";
import { useTranslation } from "react-i18next";
import Skills from "./components /skills";
import Profile from "./components /profile";
import Project from "./components /project";
import Footer from "./components /footer";
import { ContextObject } from "./hooks/context";
import useLocalStorage from "./hooks/localStorage";
import axios from "axios";
import { data } from "./data";
import { ToastContainer, toast } from 'react-toastify';

const App = () => {

  const { i18n } = useTranslation();

  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [currentLanguage, setCurrentLanguage] = useLocalStorage("currentLanguage", "en");

  const [projectData, setProjectData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);


  const handleLanguageChange = () => {
    const newLanguage = currentLanguage === "tr" ? "en" : "tr";
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    if (newLanguage === "en") {
      toast.success("The page is now viewed in English.", {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }else {
      toast.success("Sayfa artık Türkçe olarak görüntüleniyor.", {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const handleClickDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode === false && currentLanguage === "tr"){
      toast.success("Gece modu aktifleştirildi.", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }if (darkMode === false && currentLanguage === "en"){
      toast.success("The dark mode is active.", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }if (darkMode === true && currentLanguage === "tr"){
      toast.success("Gündüz modu aktifleştirildi.", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }if (darkMode === true && currentLanguage === "en"){
      toast.success("The light mode is active.", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  useEffect(() => {
    axios
      .post("https://reqres.in/api/users", {
        skills: data.skills,
        projects: data.projects
      })
      .then((res) => {
        setSkillsData(res.data.skills);
        setProjectData(res.data.projects)
        console.log(res.data.skills);
        console.log(res.data.projects)
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <ContextObject.Provider value={{ projectData, skillsData }}>
      <div className={darkMode ? "dark bg-skills-bg" : ""}>
        <Hero darkMode={darkMode} currentLanguage={currentLanguage} handleClickDarkMode={handleClickDarkMode} handleLanguageChange={handleLanguageChange} />
        <Skills />
        <Profile />
        <Project />
        <Footer />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </ContextObject.Provider>
  );
};

export default App;