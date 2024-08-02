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
                        <Link href="/" className="social-link"><Image src="/instagram.svg" alt="-icon" width={32} height={32}/></Link>
                        <Link href="/" className="social-link"><Image src="/twitter.png" alt="-icon" width={32} height={32}/></Link>
                        <Link href="/" className="social-link"><Image src="/linkedin.svg" alt="-icon" width={32} height={32}/></Link>
                        <Link href="/" className="social-link"><Image src="/github-sign.svg" alt="-icon" width={32} height={32}/></Link>
                    </div>
                    <div className="header-links footer-links">
                        <Link href="/" className="link menu-item">Home</Link>
                        <Link href="#mySkill" className="link menu-item">Experience</Link>
                        <Link href="/project" className="link menu-item">Project</Link>
                        <Link href="/about" className="link menu-item">About</Link>
                    </div>
                    <Link href="/" className="logo menu-item">OmerEsim</Link>
                    <span>&copy; 2024 Ömer Esim</span>
                </div>
            </div>
        </div>
        {/* Footer End */}
        </>
    )
}