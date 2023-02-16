const CallActions = ({ title, description }) => {
    return (
        <article className="action">
            <div className="action-wrapper">
                <h2>{title}</h2>
                <p>{description}</p>
                <div>
                    <button type="button" className="btn-action">Acessar</button>
                    <button type="button" className="btn-action">Ler mais</button>
                </div>
            </div>
        </article>
    )
}

export default CallActions