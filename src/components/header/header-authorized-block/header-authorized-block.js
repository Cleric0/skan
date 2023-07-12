import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import './style.css'

import {Context} from "../../../store";

function HeaderAuthorizedBlock() {
  const store = useContext(Context)

  const logout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('expire')
    store.clearUser()
    store.setIsAuthorized(false)
  }

  return (
    <div className={'header-authorized-block'}>
      <div className={'header-authorized-block-info'}>
        <div>Использовано компаний <b>{store.user.eventFiltersInfo.usedCompanyCount}</b></div>
        <div>Лимит по компаниям <b>{store.user.eventFiltersInfo.companyLimit}</b></div>
      </div>
      <button onClick={logout} className={'header-authorized-block-logout-btn'}>Выйти</button>
    </div>
  );
}

export default observer(HeaderAuthorizedBlock);