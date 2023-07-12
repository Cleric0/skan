import { useContext } from 'react'
import {Context} from "../../store";
import {observer} from "mobx-react-lite";
import { Button } from './button/button';

const ButtonLock = () => {
    const store = useContext(Context)
    
    return (
        <div>{store.isAuthorized ? 
        <Button />  : ''}
        </div>
    );
};

export default observer (ButtonLock);