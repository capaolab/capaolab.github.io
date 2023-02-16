import { equipeData } from "@/helpers/dataHelper";
import Image from "next/image"

const Equipe = () => {
    return (
        <section id="equipe" className="equipe alinhamento">
            <h2 className=" py-4 underline underline-offset-8 decoration-purple-400">Equipe CapãoLab</h2>
            <div className="equipe-wrapper">
                <ul className="equipe-list">
                    {
                        equipeData.map((data) => {
                            return (
                                <li key={data.id}>
                                    <Image className="equipe-image" alt="atividades" src={data.image} width={800} height={800} />
                                    <h3 className="mt-2">{data.title}</h3>
                                    <p>{data.job}</p>
                                    <ul className="mt-4">
                                        <li className="space-x-2">
                                            <ion-icon id="equipe-svg" name={data.social_1}></ion-icon>
                                            <ion-icon id="equipe-svg" name={data.social_2}></ion-icon>
                                            <ion-icon id="equipe-svg" name={data.social_3}></ion-icon>
                                        </li>
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    );
}

export default Equipe;