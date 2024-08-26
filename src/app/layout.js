import { Inter } from "next/font/google";
import "@/CSS/style.css"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ömer Esim",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar/>
          {children}
          <Footer/>
        </body>
    </html>
  );
}
