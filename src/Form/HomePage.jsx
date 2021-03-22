import React, { useState } from 'react'
import { useHistory } from 'react-router'
import Accounts from './Accounts';
import { useAuth } from './AuthContexts'

const HomePage = () => {
    const history = useHistory();
    const[show,setShow]=useState(false);
    const handleLogOut =()=>{
        setShow(true);

    //    try{
    //        logout();
    //    }catch{

    //    }
    }
    const handdleDirection = () => {
        history.push('/signUp')
    }
    return (
        <div>
            
            {show?<p onClick={handdleDirection}>LOGIN/REGISTER</p>:
            <div>
                <p><Accounts/></p>
            <button type="button" onClick={handleLogOut}>
            Log Out
        </button>
            </div>
}
            
        </div>

    )
}

export default HomePage
