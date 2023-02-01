import { equipeData } from "@/helpers/dataHelper";

const Equipe = () => {
    return (
        <section className="equipe alinhamento">
            <h2>Equipe CapãoLab</h2>
            <div className="equipe-wrapper">
                <ul className="equipe-list">
                    {
                        equipeData.map((data) => {
                            return (
                                <li key={data.id}>
                                    <img src="" alt="" />
                                    <h3>{data.title}</h3>
                                    <p>{data.job}</p>
                                    <ul>
                                        <li>
                                            <ion-icon id="webapp-svg" name={data.social_1}></ion-icon>
                                            <ion-icon id="webapp-svg" name={data.social_2}></ion-icon>
                                            <ion-icon id="webapp-svg" name={data.social_3}></ion-icon>
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