import React from 'react';
import {useNavigate} from "react-router-dom";
import '../style.css'

function HeaderUnauthorizedBlock() {
  const navigate = useNavigate()

  return (
    <div className="header-nav-log-in-pers">
      <p className="header-nav-registration">Зарегистрироваться</p>
      <button
        className="header-nav-login pointer"
        onClick={() => navigate('auth')}
      >
        Войти
      </button>
    </div>
  );
}

export default HeaderUnauthorizedBlock;