import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
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
                <div className="w-20 h-20 p-2">
                    <Image alt="logo" src="/nature.svg" width={128} height={70} />
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