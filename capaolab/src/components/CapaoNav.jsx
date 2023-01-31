import { useState, useCallback, useEffect } from "react"
/* import Image from "next/image" */
import SocitalNav from "./SocitalNav"

const CapaoNav = () => {
    const [scroll, setScroll] = useState(0)

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
                    <h1 className="h-full text-5xl text-[#14B471] font-black flex items-center">C.Lab</h1>
                </div>
                <div className="menu-nav-btn">
                    <a href="">Home</a>
                    <a href="">Eventos</a>
                    <a href="">Projetos</a>
                    <a href="">Equipe</a>
                    <a href="">contato</a>
                </div>
            </section>
        </nav>
    )
}

export default CapaoNav