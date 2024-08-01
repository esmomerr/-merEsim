import "@/CSS/Navbar.css";
import "@/CSS/style.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return (
       <>
        {/* Navbar */}
        <div className="navbar-container">
            <div className="container">  
                <nav className="navbar">
                    <Link href="/" className="logo menu-item">OmerEsim</Link>
                    {/* Desktop */}
                    <div className="header-links navbar-desktop-hidden">
                        <Link href="/" className="link menu-item">Home</Link>
                        <Link href="#mySkill" className="link menu-item">Experience</Link>
                        <Link href="/project" className="link menu-item">Project</Link>
                        <Link href="/about" className="link menu-item">About</Link>
                    </div>
                    {/* Desktop End */}

                    {/* Mobile */}
                    <Image src="/menu.png" alt="MenuIcon" width={32} height={32} className="menu-icon"/>
                    {/* Mobile End */}
                </nav>
            </div>
        </div>
        {/* Navbar end */}
       </>
    )
}