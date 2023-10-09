import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import { persistor } from '../../redux/store'; 
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch({ type: '@@redux/INIT' }); 
    persistor.purge(); 
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick} style={{ padding: 10, width:100 }}>
        login
      </button>
      <div>
      <button onClick={handleReset}>Reset Redux Store and Persisted Data</button>
    </div>
    </div>
  );
};

export default Login;
