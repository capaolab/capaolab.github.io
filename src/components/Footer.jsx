import { footerData } from "@/helpers/dataHelper";

const Footer = () => {
    return (
        <footer className="capao-footer alinhamento">
            <article className="footer-sobre">
                <h3 className="text-green-500 font-medium tracking-wide">Sobre a Capão Lab</h3>
                <p className="mt-4">{footerData.text}</p>
                <ul className="flex space-x-6 mt-6">
                    <li>
                        <ion-icon id="footer-svg" name={footerData.social_1}></ion-icon>
                    </li>
                    <li>
                        <ion-icon id="footer-svg" name={footerData.social_2}></ion-icon>
                    </li>
                </ul>
            </article>
            <article className="footer-events">
                <h3 className="text-green-500 font-medium tracking-wide">Próximos Eventos</h3>
                <ul className="flex flex-col mt-6 space-y-4">
                    <li className="footer-news">
                        <ion-icon id="footer-news-svg" name="chevron-forward-outline"></ion-icon>
                        <p>Suport BootCamp 2023</p>
                    </li>
                    <li className="footer-news">
                        <ion-icon id="footer-news-svg" name="chevron-forward-outline"></ion-icon>
                        <p>Live Desenvolvimento Web</p>
                    </li>
                </ul>
            </article>
            <article className="footer-contatos">
                <h3 className="text-green-500 font-medium tracking-wide">Contatos</h3>
                <ul className="flex flex-col mt-2 space-y-4">
                    <li className="footer-contatos-items">
                        <div className="flex space-x-1 justify-start items-center">
                            <ion-icon id="footer-contato-svg" name="location-outline"></ion-icon>
                            <h4>Endereço</h4>
                        </div>
                        <p className="!font-light tracking-wide text-sm px-4 mt-2">
                            Praça São Sebastião, SN, Caeté-Açú<br />
                            Palmeiras, Bahia, Brasil.
                        </p>
                    </li>
                    <li className="footer-contatos-items">
                        <div className="flex space-x-1 justify-start items-center">
                            <ion-icon id="footer-contato-svg" name="mail-outline"></ion-icon>
                            <h4>E-mail</h4>
                        </div>
                        <a
                            className="
                            !font-light tracking-wide text-sm px-4 mt-2 text-green-500
                            hover:text-cyan-300 hover:underline
                            "
                            href="mailto:labcaete@gmail.com
                        ">
                            labcaete@gmail.com
                        </a>
                    </li>
                </ul>
            </article>
        </footer>
    );
}

export default Footer;