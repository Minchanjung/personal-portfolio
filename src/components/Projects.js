import React from "react";
import "../styles/Projects.css";
import finstagram from "../imgs/photos/finstagram.png";

const myProjects = [
    {name: "Finstagram", img: finstagram, description: "This is a fully functioning version of Instagram that i have created with react and firebase.", siteLink: "", gitLink: "https://github.com/Minchanjung/finstagram"}, 
    {name: "finstagram", img: "", description: "", siteLink: "", gitLink: ""}, 
    {name: "finstagram", img: "", description: "", siteLink: "", gitLink: ""}, 
    {name: "finstagram", img: "", description: "", siteLink: "", gitLink: ""}
]

const Projects = () => {
    return (
        <div className="projectsContainer" id="section2">
            <h2 className="sectionHeader"><span>02.</span>My Projects</h2>
            <div className="projectsGrid">
                {myProjects.map((project, index) => (
                    <ProjectCard 
                        imgSrc={project.img}
                        title={project.name}
                        description={project.description}
                        liveSite={project.siteLink}
                        git={project.gitLink}
                        direction={index % 2 === 0 ? "right": "left"}
                    />
                ))}
            </div>
        </div>
    )
}

const ProjectCard = ({imgSrc, title, description, liveSite, git, direction}) => {
    return (
        <div className="projectCardContainer">
            <div className="cardImgContainer">
                <img className="cardImg" src={imgSrc} alt=""></img>
            </div>
            <div className="cardContentContainer">
                <h3 className="projectTitle">{title}</h3>
                <div className="projectDesc">
                    <p>{description}</p>
                </div>
                <div className="projectLinks">
                    <a href={git} className="gitBtn" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                    <a href={liveSite} className="liveSiteBtn" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                </div>
            </div>
        </div>
    )
}

export default Projects;