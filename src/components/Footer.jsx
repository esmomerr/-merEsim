import "@/CSS/Footer.css";
import "@/CSS/style.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <>
        {/* Footer */}
        <div className="footer-container">
            <div className="container">
                <div className="footer">
                    <div className="social-links">
                        <div className="social-link">
                            <Link href="/"><Image src="/instagram.svg" alt="instagram-icon" width={32} height={32}/></Link>
                        </div>
                        <div className="social-link">
                            <Link href="/"><Image src="/linkedin.svg" alt="linkedin-icon" width={32} height={32}/></Link>
                        </div>
                        <div className="social-link">
                            <Link href="/"><Image src="/github.svg" alt="github-icon" width={32} height={32}/></Link>
                        </div>
                    </div>
                    <div className="header-links footer-links">
                        <Link href="/" className="link menu-item text-decoration-none">Home</Link>
                        <Link href="#mySkill" className="link menu-item text-decoration-none">Experience</Link>
                        <Link href="/project" className="link menu-item text-decoration-none">Project</Link>
                        <Link href="/about" className="link menu-item text-decoration-none">About</Link>
                    </div>
                    <Link href="/" className="logo menu-item text-decoration-none">OmerEsim</Link>
                    <span>&copy;2024 Ömer Esim</span>
                </div>
            </div>
        </div>
        {/* Footer End */}
        </>
    )
}