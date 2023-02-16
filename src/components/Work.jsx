import { workData } from "@/helpers/dataHelper";

const Work = () => {
    return (
        <section id="work" className="work alinhamento">
            <h2 className="mb-32 text-white underline underline-offset-8 decoration-yellow-400">O que fazemos?</h2>
            <ul className="work-wrapper">
                {
                    workData.map((data) => {
                        return (
                            <li key={data.id}>
                                <div className="flex justify-start items-center">
                                    <ion-icon id="webapp-svg" name={data.svg}></ion-icon>
                                    <h3 className="ml-6">{data.title}</h3>
                                </div>
                                <p className="mt-6 text-justify">{data.description}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
}

export default Work;