import './style.css'
import tariffInfo from '../../helpers/tariffInfo'
import { CardsList } from './cards/CardList';

function Tariffs() {
    return (
        <section className="tariffs">
            <div className="tariffes-differends_block">
            {tariffInfo.map(tariff => {
                return (
                    <CardsList key={tariff.id} tariff={tariff} />
                )
            })}
            </div>
        </section>
     );
}

export default Tariffs;