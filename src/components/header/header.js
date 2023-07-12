import "./style.css";
import {useContext} from "react";
import {Context} from "../../store";
import HeaderUnauthorizedBlock from "./header-unauthorized-block/header-unauthorized-block";
import HeaderAuthorizedBlock from "./header-authorized-block/header-authorized-block";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const store = useContext(Context)
    const navigate = useNavigate()
    return (
        <header className="header-home">
            <nav className="container header-nav">
                <div className="header-nav-logo"></div>
                <ul  className="header-nav-list">
                    <li className="header-nav-one-item" onClick={() => navigate ('/home')}>Главная</li>
                    <li className="header-nav-two-item"><a href="#">Тарифы</a></li>
                    <li className="header-nav-three-item"><a href="#">FAQ</a></li>
                </ul>
              {store.isAuthorized ? <HeaderAuthorizedBlock /> : <HeaderUnauthorizedBlock />}
            </nav>
        </header>
     );
}
 
export default observer(Header);