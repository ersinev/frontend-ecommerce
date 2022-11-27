import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const GetLogin = async () => {
    const res = await axios.post("http://localhost:4000/api/login", {
      email: email,
      password: password,
      name: name,
    });
    console.log({ email, password });
    console.log(res.data);
  };



  return (
    <>
      {isRegistered && <div>
        <h3>Name</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
      </div>}
      <h3>Email:</h3>
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <h3>password</h3>
      <input
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <br></br>
      <br></br>
      <button onClick={GetLogin}>Submit</button>
      <button onClick={()=>setIsRegistered(!isRegistered)}>{isRegistered?'Login':'Register'}</button>
    </>
  );
}

export default App;
