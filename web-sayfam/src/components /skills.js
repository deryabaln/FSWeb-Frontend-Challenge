import React, { useContext } from "react";
import "./skills.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import { ContextObject } from "../hooks/context";

const Skills = () => {

    const { t } = useTranslation();

    const { skillsData } = useContext(ContextObject)

    return (
        <div>
            <h1 className="dark:text-skills-h1">{t("skills")}</h1>
            <div className="skills-container">
                {skillsData.map((skill) => (
                    <div className="skills dark:text-skills-text" key={skill.skillName}>
                        <img src={require(`../png/${skill.skillImage}`)} alt="" />
                        <p>{skill.skillName}</p>
                    </div>
                ))}
            </div>
            <div className="grey-object"></div>
            <div className="outer-circle2">
                <div className="inner-circle2"></div>
            </div>
        </div>
    );
};

export default Skills;