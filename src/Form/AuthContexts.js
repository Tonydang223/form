import React, { createContext, useContext, useEffect, useState } from 'react'
import {auth}from '../Form/firebase'


const AuthContexts = React.createContext();
export function useAuth(){
  return useContext(AuthContexts)
}
export const AuthProvider = ({children}) => {
    const[currentUser,setCurrentUser]= useState('');
    const [loading,setLoading] =useState(true);
    function signUp(email,password){
        return auth.createUserWithEmailAndPassword(email,password);
    }
    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password);
    }
    function logout(){
        return auth.signOut();
    }
    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged((user) =>{
            setCurrentUser(user)
            setLoading(false);
        })
        
        return unsubscribe
    },[])
    const value ={
        currentUser,
        signUp,
        login,
        logout
    }
    return (
        <AuthContexts.Provider value={value}>
            {!loading &&children}
        </AuthContexts.Provider>
    )
}
