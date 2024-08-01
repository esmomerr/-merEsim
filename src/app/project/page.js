import Image from "next/image";
import "@/CSS/Projects.css";
import Link from "next/link";
import projects from "@/Json/project.json"


export default function Projects(){
    console.log(projects);
    return(
        <>
        <div className="container">
            <h1 className="title-header">My Works</h1>
            <div className="projects">
                {projects.map((project, index) =>(
                    <div class="project" key={index}>
                        <Image src={project.photo} alt="" width={540} height={400} className="project-img"/>
                        <div class="project-content">
                            <p class="project-title">{project.title}</p>
                            <p class="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

                            <div className="project-links" >
                                <Link href={project.viewProjects} target="_blank" className="project-view">
                                    <span className="project-view-span">Projeyi Görüntüle</span>
                                </Link>
                                <Link href={project.viewCode} target="_blank" className="project-view">
                                    <span className="project-view-span">Projeye Git</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}