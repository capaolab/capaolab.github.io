/* import Image from "next/image" */
import { useState, useCallback, useEffect } from "react"
import SocitalNav from "./SocitalNav"
import Image from "next/image"


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
                <div className="flex items-center">
                    <Image className="logo-image" alt="logo" src="/assets/logo.png" width={100} height={100} />
                    <h1 className="logo-title">Capao_Lab</h1>
                </div>
                <div className="menu-nav-btn">
                    <a href="#carousel">Inicio</a>
                    <a href="#participar">Participar</a>
                    <a href="#work">O que fazemos</a>
                    <a href="#equipe">Equipe</a>
                </div>
                <div className="hamburger-btn">
                    <ion-icon id="toggle-svg" name={iconName} onClick={handleToggle}></ion-icon>
                </div>
            </section>
            {iconName === "close"
                ?
                <div className="w-full h-screen capitalize flex flex-col justify-start my-10 gap-5 px-5">
                    <a className="text-xl" onClick={handleToggle} href="#carousel">Inicio</a>
                    <a className="text-xl" onClick={handleToggle} href="#participar">Participar</a>
                    <a className="text-xl" onClick={handleToggle} href="#work">O que fazemos</a>
                    <a className="text-xl" onClick={handleToggle} href="#equipe">Equipe</a>
                </div>
                : null
            }
        </nav>
    )
}

export default CapaoNav