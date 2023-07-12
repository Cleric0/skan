import "./authorization.css";

import keeping from "./img_authorization/Characters.png";
import google from "./img_authorization/icon_google.svg";
import facebook from "./img_authorization/icon_facebook.svg";
import yandex from "./img_authorization/icon_yandex.svg";
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";

import {AccountService} from "../../services/account.service";
import {Context} from "../../store";


const Authorization = () => {
    const store = useContext(Context)
    const navigate = useNavigate()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const setLoginHandler = (e) => setLogin(e.target.value)
    const setPasswordHandler = (e) => setPassword(e.target.value)

    const onSubmitHandler = async () => {
        if (login && password) {
            try {
                const response = await AccountService.signIn(login, password)
                localStorage.setItem('accessToken', response.data.accessToken)
                localStorage.setItem('expire', response.data.expire)
                navigate('/home')
                store.setIsAuthorized(true)
                const userResponse = await AccountService.getInfo()
                store.setUser(userResponse.data)
            } catch (e) {
                console.log(e)
            }
        }
    }
    

    return (
        <main>
        <div className="container str_authorization">  
            <div className="authorization-title-block">
                <h1 className="authorization-title">Для оформления подписки 
                    на тариф, необходимо авторизоваться.</h1>
                <div className="authorization-img"><img src={keeping} alt="authorization" /></div>
            </div>
            <div className="login-block">
                <div className="registration-block">
                    <p className="registration">Войти</p>
                    <p className="login-here">Зарегистрироваться</p>
                </div>
                <div className="login-form">
                    <p className="login-form-title">Логин или номер телефона:</p>
                    <input className="login-form-input" type="text" onChange={setLoginHandler} />
                </div>
                <div className="password-form">
                    <p className="password-form-title">Пароль:</p>
                    <input className="password-form-input" type="password" onChange={setPasswordHandler} />
                </div>
                <div>
                    <button className="login-form-button" onClick={onSubmitHandler}>Войти</button>
                </div>
                <div className="password-lose-block"><a className="password-lose" href="#">Восстановить пароль</a></div>
                <div className="login_thru-block">
                    <p className="thru-title">Войти через:</p>
                    <div className="thru-block">
                        <button className="login_thru-icon thru-block-icon-one"><img className="icon_login_thru" src={google} alt="icon google"/></button>
                        <button className="login_thru-icon thru-block-icon-two"><img className="icon_login_thru" src={facebook} alt="icon facebook"/></button>
                        <button className="login_thru-icon thru-block-icon-three"><img className="icon_login_thru" src={yandex} alt="icon yandex"/></button>
                    </div>
                </div>
            </div> 
        </div>     
    </main>
     );
}
 
export default Authorization;