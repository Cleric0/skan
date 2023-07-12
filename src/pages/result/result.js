import "./result.css";

import skill from "./img/card-1.png";
import science from "./img/card-2.png";
import ResultSlider from "../../components/result-slider/slider-result";
import Documents from "../../components/documents/documents-card";

const Result = () => {
    return ( 
        <main>
            <div className="container">
                <section className="search-result">
                    <div className="search-result-title-block">
                        <h1 className="search-result-title">Ищем. Скоро будут результаты</h1>
                        <p className="search-result-title-text">Поиск может занять некоторое время, просим сохранять терпение.</p>
                    </div>
                    <div className="search-result-img">
                    </div>
                </section>
                <section className="summary">
                    <h2 className="search-summary">Общая сводка</h2>
                    <p className="search-summary-text">Найдено 4 221 вариантов</p>
                    < ResultSlider />
                </section>
                <section className="result-documents">
                    <Documents />
                    {/* <h2 className="result-documents-title">Список документов</h2>
                    <div className="result-documents-cards">
                        <div className="result-documents-card">
                            <div>
                                <p className="document-date">13.09.2021</p>
                                <p className="document-title-date">Комсомольская правда KP.RU</p>
                            </div>
                            <h3 className="card-title">Скиллфэктори - лучшая онлайн-школа для будущих айтишников</h3>
                            <p className="card-title-text">Технические новости</p>
                            <img className="card-doc-elem-first" src={skill} alt="skillfactory" />
                            <p className="result-documents-title-text">
                                SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.
                            </p>
                            <p className="result-documents-title-text-two">
                                Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.
                            </p>
                            <div>
                                <button className="result-documents-button">Читать в источнике</button>
                                <p className="result-documents-world">2 543 слова</p>
                            </div>
                        </div>
                        <div className="result-documents-card">
                            <div>
                                <p className="document-date">15.10.2021</p>
                                <p className="document-title-date">VC.RU</p>
                            </div>
                            <h3 className="card-title">Работа в Data Science в 2022 году: тренды, навыки и обзор специализаций</h3>
                            <p className="card-title-text">Технические новости</p>
                            <img className="card-doc-img-second" src={science} alt="data science" />
                            <p className="result-documents-title-text">
                                Кто такой Data Scientist и чем он занимается?
                                Data Scientist — это специалист, который работает с большими массивами данных, чтобы с их помощью решить задачи бизнеса. Простой пример использования больших данных и искусственного интеллекта — умные ленты в социальных сетях. На основе ваших просмотров и лайков алгоритм выдает рекомендации с контентом, который может быть вам интересен. Эту модель создал и обучил дата-сайентист, и скорее всего, не один.
                            </p>
                            <p className="result-documents-title-text-two">   
                                В небольших компаниях и стартапах дата-сайентист делает все: собирает и очищает данные, создает математическую модель для их анализа, тестирует ее и презентует готовое решение бизнесу.
                            </p>
                            <div>
                                <button className="result-documents-button">Читать в источнике</button>
                                <p className="result-documents-world">3 233 слова</p>
                            </div>
                        </div> 
                    </div>*/}
                </section>
            </div>
        </main>
     );
}
 
export default Result;