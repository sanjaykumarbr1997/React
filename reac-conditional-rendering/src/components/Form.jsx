import React  from "react";
import Input from "./Input"

function Form(){
    return <form className="form">
     <Input 
         type = "text"
         userName = "Username"
     /> 
     <Input 
         type = "password"
         userName = "Password"
     /> 
    
    <button type="submit">Login</button>
  </form>
}

export default Form;