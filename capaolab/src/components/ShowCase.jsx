import Image from "next/image"
import React from 'react';
import Carousel from './effects_components/Carousel';
import { atividadesImages } from "@/helpers/carouselImages";

const ShowCase = () => {
    return (
        <section className="showcase">
            <Carousel />
            <article className="atividades alinhamento">
                <h2>Áreas de 
                    <span className=" ml-4 text-3xl tracking-wide underline underline-offset-4 decoration-red-700">Atuação</span> 
                </h2>
                <ul>
                    <li>
                        <Image className="atividades-images" alt="atividades" src={atividadesImages[0].image} width={800} height={800} />
                        <h3 className="atividades-name">Desenvolvimento Web</h3>
                    </li>
                    <li>
                        <Image className="atividades-images" alt="atividades" src={atividadesImages[1].image} width={800} height={800} />
                        <h3 className="atividades-name">Mentorias</h3>
                    </li>
                    <li>
                        <Image className="atividades-images" alt="atividades" src={atividadesImages[2].image} width={800} height={800} />
                        <h3 className="atividades-name">BootCamps</h3>
                    </li>
                </ul>
            </article>
        </section>
    );
}

export default ShowCase;
