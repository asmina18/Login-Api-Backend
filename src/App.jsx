
import { Form } from "./components/Form/Form";
import { InputField } from "./components/InputField/InputField";
import signUpControllers from "../src/controllers/signUpControllers.json";
import sigInController from "../src/controllers/sigInController.json";
import { useContext, useState } from "react";
import { UserData } from "./components/User/UserData";
import { UserContext } from "./context/UserContext";

function App() {
  const [msg, setMsg] = useState();
  const [isSignIn, setSignIn] = useState(true);
  const { setUserData,userData } = useContext(UserContext);


  const signUp = (e) => {
    e.preventDefault();
    let url = "http://localhost:8081/sign-up";

    let body = new URLSearchParams();
    body.append("name", e.target.name.value);
    body.append("email", e.target.email.value);
    body.append("password", e.target.password.value);

    let options = {
      method: "POST",
      body: body,
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setMsg(data))
      .catch((err) => console.log(err));
  };
  const sign = (e) => {
    e.preventDefault()
    let url = "http://localhost:8081/sign-in"
    let body = new URLSearchParams()
    body.append("email", e.target.email.value)
    body.append("password", e.target.password.value)

    let options = {
      method: "POST",
      body: body
    }
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => console.log(err));
  }
  console.log(userData)
  console.log(msg);

  return (
    <>
        <button onClick={() => setSignIn(!isSignIn)}>
          {isSignIn ? "Sign in" : "Sign up"}
        </button>

        <Form submitAction={!isSignIn ? signUp : sign}>
          {<p>{isSignIn ? "Sign in" : "Sing up"}</p>}
          {msg && <b>{msg}</b>}

          {!isSignIn ? (
            signUpControllers.form.map((input, index) => (
              <InputField
                key={index}
                placeholder={input.placeholder}
                name={input.name}
                type={input.type}
                labelText={input.labelText}
                text={input.text}
              />
            ))
          ) : (
            sigInController.form.map((input, index) => (
              <InputField
                key={index}
                placeholder={input.placeholder}
                name={input.name}
                type={input.type}
                labelText={input.labelText}
                text={input.text}
              />
            ))
          )}
        </Form>
        <UserData />
    </>
  );
}

export default App;
