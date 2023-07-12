import "./style.css";

function CardsList(props) {

    const {tariff} = props

    return (
        <div className="tariffes-differends" style={{border: tariff.border}}>
                <div className="tariffes-differends_three one_head" style={{background: tariff.background, color: tariff.color}}>
                    <div className="tariffes-differends_three-text">
                        <h3 className="tariffes-head_title-tariff-bisiness">{tariff.titleTariff}</h3>
                        <p className="tariffes-differends_three-text-for">{tariff.tarrifFor}</p>
                    </div>
                    <div img className="tariff_icon-one">
                        <img src={tariff.img} alt={tariff.alt}/>    
                    </div>
                </div>
                <div className="tariffes-differends_one_conditions">
                    <p className="tariffes-differends_one_conditions-p">{tariff.currentTariff}</p>
                    <div>
                        <p className="tariffes-current-price">{tariff.currentPrice}</p>
                        <p className="tariffes-last-price">{tariff.lastPrice}</p>
                    </div>
                    <p className="tariffes-divide-price">{tariff.dividePrice}</p>
                </div>
                <div className="tariffes-differends_incluses_block">
                    <h4 className="tariffes-differends_incluses_title title-h4">{tariff.inclusive}</h4>
                    <ul className="tariffes-differends_incluses">
                        <li className="tariffes_incluse_puncts">{tariff.punctFirst}</li>
                        <li className="tariffes_incluse_puncts">{tariff.punctSecond}</li>
                        <li className="tariffes_incluse_puncts">{tariff.punctThirst}</li>
                    </ul>
                </div>
                <div><button className="tariffes-differends_one_button"style={{button: tariff.button}}>{tariff.textButton}</button></div>
            </div>
    )
}

export {CardsList}