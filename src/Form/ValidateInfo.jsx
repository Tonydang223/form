 import React from 'react'

function ValidateInfo(values) {
    let errors = {}
    if(!values.username.trim())
    {
        errors.username = "Username required"
    }else if((values.username + 'admin').length < 7){
        errors.username ="The userName is already existed"
    }

    if(!values.email.trim())
    {
        errors.email = "Email required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
    {
      errors.email = "Email address is invalid"
    }
    if(!values.password.trim())
    {
        errors.password = "Password required"
    }else if(values.password.length<6){
        errors.password = "Password needs to be at least 6 characters and more"
    }
    if(!values.ConfirmPassword.trim()){
        errors.ConfirmPassword = "ConfirmPassword required"
    }else if(values.ConfirmPassword !== values.password){
        errors.ConfirmPassword ="Password does not match"
    }
    

    return errors
    
}

export default ValidateInfo
