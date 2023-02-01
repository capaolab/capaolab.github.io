import { workData } from "@/helpers/dataHelper";

const Work = () => {
    return (
        <section className="work alinhamento">
            <ul className="work-wrapper">
                {
                    workData.map((data) =>{
                        return(
                            <li key={data.id}>
                                <ion-icon id="webapp-svg" name={data.svg}></ion-icon>
                                <h3>{data.title}</h3>
                                <p>{data.description}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
}
 
export default Work;