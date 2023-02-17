import Image from "next/image"
import React from 'react';
import Carousel from './effects_components/Carousel';

const ShowCase = () => {
    return (
        <section className="showcase">
            <Carousel />
            <article id="participar" className="atividades alinhamento">
                <h2 className="ml-4 underline underline-offset-8 decoration-red-700">Como participar</h2>
                <ul>
                    <li>
                        <p className="atividades-name ">
                            Envie um email para:<br />
                            <a className="underline mt-1 font-normal decoration-red-700 underline-offset-8"
                                href="mailto:labcaete@gmail.com">labcaete@gmail.com
                            </a>
                        </p>
                        <Image className="atividades-images" alt="atividades" src="/assets/email.svg" width={800} height={800} />
                    </li>
                    <li>
                        <Image className="atividades-images hidden sm:flex" alt="atividades" src="/assets/popular.svg" width={800} height={800} />
                        <p className="w-full sm:w-2/3 atividades-name">
                            <span className="font-medium mr-2 underline decoration-red-700 underline-offset-8">Aguarde o e-mail</span>
                            da nossa equipe com link
                            de acesso a nossos canais de comunicação
                        </p>
                        <Image className="atividades-images sm:hidden" alt="atividades" src="/assets/popular.svg" width={800} height={800} />
                    </li>
                    <li>
                        <p className="atividades-name ">
                            Fique atento ao nossos eventos e se
                            <span className="ml-2 underline font-normal decoration-red-700 underline-offset-8">intergre com a comunidade!</span>
                        </p>
                        <Image className="atividades-images" alt="atividades" src="/assets/party.svg" width={800} height={800} />
                    </li>
                </ul>
            </article>
        </section >
    );
}

export default ShowCase;
