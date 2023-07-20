import React, { useContext, useState } from "react";
import "./project.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import { ContextObject } from "../hooks/context";

const Project = () => {

    const { t } = useTranslation();

    const { projectData } = useContext(ContextObject)

    const [startIndex, setStartIndex] = useState(0);
    const projectsPerPage = 2

    const handleNextPage = () => {
        const totalProjects = projectData.length;
        const newStartIndex = (startIndex + projectsPerPage) % totalProjects;
        setStartIndex(newStartIndex);
    };

    const renderProjects = () => {
        const currentProjects = projectData.slice(startIndex, startIndex + projectsPerPage);

        return currentProjects.map((project) => (
            <div key={project.id} className={`project ${project.id % 2 === 0 ? "second-project" : "first-project"}`}>
                <h4>{t(`${project.name}`)}</h4>
                <p>{t(`${project.description}`)}</p>
                <div className="content">
                    {project.content.map((item) => (
                        <h6 key={item}>{item}</h6>
                    ))}
                </div>
                <div className="aTag">
                    <a href={project.github}>{t("View on Github")}</a>
                    <a href={project.appLink} style={{ marginRight: "3%" }}>{t("go app")}</a>
                </div>
                <img src={require(`../png/${project.imgUrl}`)} alt="" />
            </div>
        ));
    };

    return (
        <div className="projects-container">
            <h1 className="dark:text-skills-h1">{t("projects")}</h1>
            <div className="projects">{renderProjects()}</div>
            <button onClick={handleNextPage}>{t("button")}</button>
        </div>
    );
};

export default Project;
