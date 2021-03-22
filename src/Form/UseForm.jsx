import React, { useState } from 'react'
import { useHistory } from 'react-router'
import useLocalStorageState from 'use-local-storage-state'
import { useAuth } from './AuthContexts'
import { auth } from './firebase'
import ValidateInfo from './ValidateInfo'

function UseForm(validate) {
    console.log("🚀 ~ file: UseForm.jsx ~ line 9 ~ UseForm ~ validate", validate)
    const [values,setValues]= useState({
        username: '',
        email: '',
        password: '',
        ConfirmPassword: '',
    })
    const {signUp,currentUser,login} = useAuth()
    const[loading,setLoading] = useState(false)
    const history = useHistory();
    

    const [errors,setErrors]= useState({})
    
    const handleChange = (e) =>
    {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
async function handleSubmitSignup (e)
    {

        console.log('submkit')            

        e.preventDefault();
        setErrors(validate(values))

        try{
            setLoading(true);
            await signUp(values.email,values.password)
        }catch(e){
            console.log(e)            

        }
        setLoading(false)
    }
async function handleSubmitLogIn (e){
        e.preventDefault();
        setErrors(validate(values))

        try{
            setLoading(true);
            await login(values.email,values.password)
            history.push("/dash")
        }catch{

        }
    }
    return{values,errors,handleSubmitSignup,handleChange,currentUser,handleSubmitLogIn}
}

export default UseForm
