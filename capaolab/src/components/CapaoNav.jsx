import { useState, useCallback, useEffect } from "react"
/* import Image from "next/image" */
import SocitalNav from "./SocitalNav"
import ToggleMenu from "./Navbar/ToggleMenu"

const CapaoNav = () => {
    
    const [scroll, setScroll] = useState(0)
    const [iconName, setIconName] = useState("menu")

    const handleToggle = () => {
        iconName === "menu" ? setIconName("close") : setIconName("menu")
    }
    const handleScroll = () => {
        setScroll(window.pageYOffset);
    }

    useEffect(() => {
        const watchScroll = () => window.addEventListener("scroll", handleScroll);
        watchScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);



    return (
        <nav className="capao-nav">
            {scroll === 0 ? <SocitalNav /> : null}
            <section className="menu-nav">
                <div className="">
                    <h1 className="h-full text-3xl md:text-4xl text-[#14B471] font-bold flex justify-start items-center">CapaoLab</h1>
                </div>
                <div className="menu-nav-btn">
                    <a href="">Home</a>
                    <a href="">Eventos</a>
                    <a href="">Projetos</a>
                    <a href="">Equipe</a>
                    <a href="">contato</a>
                </div>
                <div className="hamburger-btn">
                    <ion-icon name={iconName} onClick={handleToggle}></ion-icon>
                </div>
            </section>
            {iconName === "close" ? <ToggleMenu /> : null}
        </nav>
    )
}

export default CapaoNav