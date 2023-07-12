import HomeSlider from "../../components/home-slider/homeSlider";
import welcome from "../../assets/images/main-section-one.png"
import mobile from "../../assets/images/main-section_mobile.png";
import ButtonLock from "../../components/homeButton/button-search";
import Tariffs from "../../components/homeCardsTariff/Tariff";

const Home = () => {
    return ( 
        <main className="main-home">
            <section className="container first_section-conteiner">
                <div className="first-section_two-conteiners">
                    <div className="first-section_first-conteiner">
                        <h1 className="first-section_first-conteiner-title">сервис по поиску публикаций <br /> о компании <br />по его ИНН</h1>
                        <p className="first-section_first-conteiner-offer">Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
                        <ButtonLock />
                    </div>
                    <div  className="first-section_second-conteiner">
                        <div className="first-section_second-conteiner-img"> <img src={welcome} alt="welcome on home" /></div>
                    </div>
                </div>
            </section>

            <section className="container second-section_advantages">
                <h2 className="second-section_advantages-title title-h2">Почему именно мы</h2>
                <HomeSlider />
                <div className="second-section_img"><img className="img_for_mobile" src={mobile} alt="for mobile" /></div>
            </section>
            
            <section className="container third-section_tariff">
                <h2 className="section_tariff-title title-h2">наши тарифы</h2>
                <div className="tariffes-differends_block">
                    < Tariffs />
                </div>
            </section>
        </main>
    );
}
 
export default Home;