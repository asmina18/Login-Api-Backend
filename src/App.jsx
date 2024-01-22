
  // import './App.css'
import {Form} from "./components/Form/Form"
import {InputField} from "./components/InputField/InputField"
import signUpcontrolles from "../src/controllers/signUpControllers.json";
import { useState } from "react";


function App() {
const [msg,setMsg]= useState()

const signUp =(e)=>{
e.preventDefault()
let url ="http://localhost:8081/sign-up"

let body = new URLSearchParams();
body.append("name",e.target.name.value)
body.append("email",e.target.email.value)
body.append("password",e.target.password.value)


let option = {
  method: "POST",
  body: body,
}

fetch( url,option)
.then((res)=>res.json())
.then((data)=> setMsg(data))
.catch((err)=>console.log(err));
}
console.log(msg);
    return (
      <Form submitAction={signUp}>
        {msg && <b>{msg}</b>}
        {signUpcontrolles.form.map((input) => (
          <InputField
            key={input.name} 
            placeholder={input.placeholder}
            name={input.name}
            type={input.type}
            labelText={input.labelText}
            text={input.text}
          />
        ))}
      </Form>
    );
  }
  
  export default App;
