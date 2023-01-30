import Image from "next/image"
import React from 'react';
import Carousel from './effects_components/Carousel';
import { atividadesImages } from "@/helpers/carouselImages";

const ShowCase = () => {
    return (
        <section className="showcase">
            <Carousel />
            <article className="atividades">
                <h2>Áreas de Atuação</h2>
                <ul>
                    <li>
                        <Image className="atividades-images" alt="atividades" src={atividadesImages[0].image} width={200} height={200} />
                        <h3>Desenvolvimento Web</h3>
                    </li>
                    <li>
                        <Image className="atividades-images" alt="atividades" src={atividadesImages[1].image} width={200} height={200} />
                        <h3>Mentorias</h3>
                    </li>
                    <li>
                        <Image className="atividades-images" alt="atividades" src={atividadesImages[2].image} width={200} height={200} />
                        <h3>BootCamps</h3>
                    </li>
                </ul>
            </article>
        </section>
    );
}

export default ShowCase;
