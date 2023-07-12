import './style.css';
import fail from "./img_search/search-fail.svg";
import folders from "./img_search/folders.svg";
import searchImg from "./img_search/search_img.png";
import Component from '../../components/formForResult/component';

const Search = () => {
    return (     
        <main>
            <section className="container serch-block-supp">
                <div className="title-serch">
                    <h1 className="title-serch-supp">Найдите необходимые данные в пару кликов.</h1>
                    <p className="title-serch-supp-dop">Задайте параметры поиска. Чем больше заполните, тем точнее поиск</p>
                </div>
                <div className="title-serch-icon-fail">
                    <div className="serch-icon-fail"><img src={fail} alt="icon fail" /></div>
                    <div className="serch-icon-olders"><img src={folders} alt="icon folders" /></div>
                </div>
            </section>
            <section className="assist_block">
                <Component />
                <div><img className="assist_block_img" src={searchImg} alt="get search" /></div>
            </section>
        </main> 
    );
}
 
export default Search;