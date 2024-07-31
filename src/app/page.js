"use client"

import "@/CSS/style.css";
import "@/CSS/Home.css";
import "@/CSS/MySkills.css";
import "@/CSS/Projects.css";
import "@/CSS/SlideRoll.css";
import "@/CSS/Education.css";
import Link from "next/link";

export default function Home() {
    return (
        <>
        <div className="container">
            {/* Home Page */}
            <div className="home">
                {/* Desktop */}
                <div className="my-blog desktop-hidden">
                    <h3 className="my-blog-name">I am Omer Esim</h3>
                    <h1 className="my-blog-profession">Front-end Developer</h1>
                    <p className="my-blog-description">I'm a front-end developer and I enjoy creating accessible web applications that users will love.</p>
                    <Link href="" className="cta" download>
                        <span>Download Cv</span>
                        <svg width="15px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </Link>
                </div>
                <div className="img-container desktop-hidden">
                        <img src="Omer-Esin.jpg" alt="omer-esim-image" className="omer-esim-image"/>
                </div>
                {/* Desktop Ends */}

                {/* Mobile */}
                <div className="my-blog desktop-visible">
                    <h3 className="my-blog-name">I am Omer Esim</h3>
                    <h1 className="my-blog-profession">Front-end Developer</h1>
                    <div className="img-container">
                        <img src="Omer-Esin.jpg" alt="omer-esim-image" className="omer-esim-image"/>
                    </div>
                    <p className="my-blog-description">I'm a front-end developer and I enjoy creating accessible web applications that users will love.</p>
                    <a href="" className="cta" download>
                        <span>Download Cv</span>
                        <svg width="15px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </a>
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
                            <img src="html.png" alt="-icon"/>
                            <span>1 years</span>
                        </div>
                        <span>HTML</span>
                    </div>
                    <div className="skill">
                        <div className="img-name">
                            <img src="css.png" alt="-icon"/>
                            <span>1 years</span>
                        </div>
                        <span>CSS</span>
                    </div>
                    <div className="skill">
                        <div className="img-name">
                            <img src="js.png" alt="-icon"/>
                            <span>1 years</span>
                        </div>
                        <span>Javascript</span>
                    </div>
                    <div className="skill">
                        <div className="img-name">
                            <img src="react.png" alt="-icon"/>
                            <span>1 years</span>
                        </div>
                        <span>React</span>
                    </div>
                    <div className="skill">
                        <div className="img-name">
                            <img src="supabase.png" alt="-icon" style={{width: "64px"}}/>
                            <span>1 years</span>
                        </div>
                        <span>Supabase</span>
                    </div>
                    <div className="skill">
                        <div className="img-name">
                            <img src="next-js.svg" alt="-icon"/>
                            <span>1 years</span>
                        </div>
                        <span>Next.js</span>
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
                        <div className="roll-icon"><img src="/star-icon.svg" alt="star-icon" /></div>
                        <div className="roll-title">HTML</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><img src="/star-icon.svg" alt="star-icon" /></div>
                        <div className="roll-title">CSS</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><img src="/star-icon.svg" alt="star-icon" /></div>
                        <div className="roll-title">Javascript</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><img src="/star-icon.svg" alt="star-icon" /></div>
                        <div className="roll-title">React.js</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><img src="/star-icon.svg" alt="star-icon" /></div>
                        <div className="roll-title">Next.js</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><img src="/star-icon.svg" alt="star-icon" /></div>
                        <div className="roll-title">Supabase</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><img src="/star-icon.svg" alt="star-icon" /></div>
                        <div className="roll-title">Git</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><img src="/star-icon.svg" alt="star-icon" /></div>
                        <div className="roll-title">Github</div>
                    </div>
                </div>
                <div className="roll-box roll-box-revers">
                    <div className="roll-item">
                        <div className="roll-icon"><img src="/star-icon.svg" alt="star-icon" /></div>
                        <div className="roll-title">HTML</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><img src="/star-icon.svg" alt="star-icon" /></div>
                        <div className="roll-title">CSS</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><img src="/star-icon.svg" alt="star-icon" /></div>
                        <div className="roll-title">Javascript</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><img src="/star-icon.svg" alt="star-icon" /></div>
                        <div className="roll-title">React.js</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><img src="/star-icon.svg" alt="star-icon" /></div>
                        <div className="roll-title">Next.js</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><img src="/star-icon.svg" alt="star-icon" /></div>
                        <div className="roll-title">Supabase</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><img src="/star-icon.svg" alt="star-icon" /></div>
                        <div className="roll-title">Git</div>
                    </div>
                    <div className="roll-item">
                        <div className="roll-icon"><img src="/star-icon.svg" alt="star-icon" /></div>
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
                <div class="project">
                    <img src="memory-game.jpg" alt="" className="project-img"/>
                    <div class="project-content">
                        <p class="project-title">Memory Game</p>
                        <p class="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

                        <div className="project-links" >
                            <a href="" className="project-view">
                                <span className="project-view-span">Projeyi Görüntüle</span>
                            </a>
                            <a href="" className="project-view">
                                <span className="project-view-span">Projeye Git</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="project">
                    <img src="memory-game.jpg" alt="" className="project-img"/>
                    <div class="project-content">
                        <p class="project-title">Memory Game</p>
                        <p class="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

                        <div className="project-links" >
                            <a href="" className="project-view">
                                <span className="project-view-span">Projeyi Görüntüle</span>
                            </a>
                            <a href="" className="project-view">
                                <span className="project-view-span">Projeye Git</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="project">
                    <img src="memory-game.jpg" alt="" className="project-img"/>
                    <div class="project-content">
                        <p class="project-title">Memory Game</p>
                        <p class="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        
                        <div className="project-links" >
                            <a href="" className="project-view">
                                <span className="project-view-span">Projeyi Görüntüle</span>
                            </a>
                            <a href="" className="project-view">
                                <span className="project-view-span">Projeye Git</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="project">
                    <img src="memory-game.jpg" alt="" className="project-img"/>
                    <div class="project-content">
                        <p class="project-title">Memory Game</p>
                        <p class="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        
                        <div className="project-links" >
                            <a href="" className="project-view">
                                <span className="project-view-span">Projeyi Görüntüle</span>
                            </a>
                            <a href="" className="project-view">
                                <span className="project-view-span">Projeye Git</span>
                            </a>
                        </div>
                    </div>
                </div>
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
