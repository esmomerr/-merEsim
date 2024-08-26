"use client"

import "@/CSS/style.css";
import "@/CSS/Home.css";
import "@/CSS/MySkills.css";
import "@/CSS/Projects.css";
import "@/CSS/SlideRoll.css";
import "@/CSS/Education.css";
import Link from "next/link";
import Image from "next/image";
import projects from "@/Json/project.json"
import WarningModal from "@/components/warningModal";

export default function Home({ Component, pageProps }) {
    return (
        <>
        <div className="container">
            {/* Home Page */}
            <WarningModal />
            {/* <Component {...pageProps} /> */}
            <div className="home">
                {/* Desktop */}
                <div className="my-blog desktop-hidden">
                    <h3 className="my-blog-name">I am Omer Esim</h3>
                    <h1 className="my-blog-profession">Front-end Developer</h1>
                    <p className="my-blog-description">Im a front-end developer and I enjoy creating accessible web applications that users will love.</p>
                    <Link href="https://drive.google.com/file/d/1qyhRtrNl_oALSOuhtQQCtk7owrhfdnxn/view?usp=sharing" className="cta" target="_blank" passHref>
                        <span>Click for Cv</span>
                        <svg width="15px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </Link>
                </div>
                <div className="img-container desktop-hidden">
                        <Image src="/Omer-Esin.jpg" alt="omer-esim-image" width={437} height={300} className="omer-esim-image"/>
                </div>
                {/* Desktop Ends */}

                {/* Mobile */}
                <div className="my-blog desktop-visible">
                    <h3 className="my-blog-name">I am Omer Esim</h3>
                    <h1 className="my-blog-profession">Front-end Developer</h1>
                    <div className="img-container">
                        <Image src="/Omer-Esin.jpg" alt="omer-esim-image" width={300} height={300} className="omer-esim-image"/>
                    </div>
                    <p className="my-blog-description">Im a front-end developer and I enjoy creating accessible web applications that users will love.</p>
                    <Link href="https://drive.google.com/file/d/12CX-r92LvJhVWdDRivDUD7vHstNpSkva/view?usp=sharing" className="cta" download>
                        <span>Click for Cv</span>
                        <svg width="15px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </Link>
                </div>
            </div>
            {/* Home Page End */}
        </div>


        {/* My Skills Page */}
        <div className="my-skills-container" id="mySkill">
            <div className="container">
                <h1 className="title-header">My Skills</h1>
                <div className="my-skills">
                    <div className="skill">
                        <div className="img-name">
                            <Image src="/html.png" alt="-icon" width={64} height={64}/>
                            <span className="skill-year">1 years</span>
                        </div>
                        <span className="skill-name">HTML</span>
                    </div>
                    <div className="skill">
                        <div className="img-name">
                            <Image src="/css.png" alt="-icon" width={64} height={64}/>
                            <span className="skill-year">1 years</span>
                        </div>
                        <span className="skill-name">CSS</span>
                    </div>
                    <div className="skill">
                        <div className="img-name">
                            <Image src="/js.png" alt="-icon" width={64} height={64}/>
                            <span className="skill-year">1 years</span>
                        </div>
                        <span className="skill-name">Javascript</span>
                    </div>
                    <div className="skill">
                        <div className="img-name">
                            <Image src="/react.png" alt="-icon" width={64} height={64}/>
                            <span className="skill-year">1 years</span>
                        </div>
                        <span className="skill-name">React</span>
                    </div>
                    <div className="skill">
                        <div className="img-name">
                            <Image src="/supabase.png" alt="-icon" width={64} height={64}/>
                            <span className="skill-year">1 years</span>
                        </div>
                        <span className="skill-name">Supabase</span>
                    </div>
                    <div className="skill">
                        <div className="img-name">
                            <Image src="/next-js.svg" alt="-icon" width={64} height={64}/>
                            <span className="skill-year">1 years</span>
                        </div>
                        <span className="skill-name">Next.js</span>
                    </div>
                </div>
            </div>
        </div>
        {/* My Skills Page End */}

        {/* Slide Roll */}
        <section className="tj-roll-section">
            <div className="slide-roll">
                <div className="roll-box roll-box-revers">
                    <div className="roll-item">
                        <div className="roll-icon"><Image src="/star-icon.svg" alt="star-icon" width={64} height={64}/></div>
                        <div className="roll-title">HTML</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><Image src="/star-icon.svg" alt="star-icon" width={64} height={64}/></div>
                        <div className="roll-title">CSS</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><Image src="/star-icon.svg" alt="star-icon" width={64} height={64}/></div>
                        <div className="roll-title">Javascript</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><Image src="/star-icon.svg" alt="star-icon" width={64} height={64}/></div>
                        <div className="roll-title">React.js</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><Image src="/star-icon.svg" alt="star-icon" width={64} height={64}/></div>
                        <div className="roll-title">Next.js</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><Image src="/star-icon.svg" alt="star-icon" width={64} height={64}/></div>
                        <div className="roll-title">Supabase</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><Image src="/star-icon.svg" alt="star-icon" width={64} height={64}/></div>
                        <div className="roll-title">Git</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><Image src="/star-icon.svg" alt="star-icon" width={64} height={64}/></div>
                        <div className="roll-title">Github</div>
                    </div>
                </div>
                <div className="roll-box roll-box-revers">
                    <div className="roll-item">
                        <div className="roll-icon"><Image src="/star-icon.svg" alt="star-icon" width={64} height={64}/></div>
                        <div className="roll-title">HTML</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><Image src="/star-icon.svg" alt="star-icon" width={64} height={64}/></div>
                        <div className="roll-title">CSS</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><Image src="/star-icon.svg" alt="star-icon" width={64} height={64}/></div>
                        <div className="roll-title">Javascript</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><Image src="/star-icon.svg" alt="star-icon" width={64} height={64}/></div>
                        <div className="roll-title">React.js</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><Image src="/star-icon.svg" alt="star-icon" width={64} height={64}/></div>
                        <div className="roll-title">Next.js</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><Image src="/star-icon.svg" alt="star-icon" width={64} height={64}/></div>
                        <div className="roll-title">Supabase</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><Image src="/star-icon.svg" alt="star-icon" width={64} height={64}/></div>
                        <div className="roll-title">Git</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><Image src="/star-icon.svg" alt="star-icon" width={64} height={64}/></div>
                        <div className="roll-title">Github</div>
                    </div>
                </div>
            </div>
        </section>
        {/* Slide Roll End */}

        <div className="container">
            {/* Projects Page */}
            <h1 className="title-header">My Works</h1>
            <div className="projects">
                {projects.map((project, index) =>(
                    <div className="project" key={index}>
                        <Image src={project.photo} alt="" width={540} height={400} className="project-img"/>
                        <div className="project-content">
                            <p className="project-title">{project.title}</p>
                            <p className="project-description">{project.description}</p>
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
            <div className="more-container">
                <Link href="/project" className="more">More</Link>
            </div>
            {/* Projects Page End*/}



            {/* Education Page */}
            <section class="timeline-section" id="education">  
                <h2 class="title-header">Education</h2>
                <div class="timeline-items">
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2019</div>
                        <div class="timeline-content">
                            <h3>High School</h3>
                            <p>Şehit Davut Ali Karadağ Mesleki Ve Teknik Anadolu Lisesi <br/>
                                Bilişim Teknolojileri Web Programcılığı bölümü</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2023</div>
                        <div class="timeline-content">
                            <h3>Academy</h3>
                            <p>Nişantaşı Üniversitesi Acunmedya Akademi <br />
                                Genişletilmiş Front-end yazılım uzmanlığı eğitimi</p>
                        </div>
                    </div>
                    
                </div>
                <div className="more-container">
                    <Link href="/about" className="more">More</Link>
                </div>
            </section>
            {/* Education Page End */}
        </div>
        </>
    );
}
