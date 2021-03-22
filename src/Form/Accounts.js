import React from 'react'
import { useAuth } from './AuthContexts'

const Accounts = () => {
    const {currentUser}= useAuth();
    return (
        <p>{currentUser.email}</p>

    )
}

export default Accounts
