import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { loginApi } from "../services/UserService";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
const Login = () => {
  const navigate = useNavigate();
  const { loginContext } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      toast.error("Email || Password is required!");
      return;
    }

    let res = await loginApi(email, password);
    if (res && res.token) {
      loginContext(email, res.token);
      navigate("/users");
    } else {
      // Error
      if (res && res.status === 400) {
        toast.error(res.data.error);
      }
    }
  };
  return (
    <div className="login-container col-12 col-sm-4">
      <div className="title">Login</div>
      <div className="text">
        Email or Username (eve.holt@reqres.in & cityslicka)
      </div>
      <input
        className="input-data"
        type="text"
        placeholder="Email or username..."
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="input-data"
        type="password"
        placeholder="Password..."
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => handleLogin()}>Login</button>
      <div className="back">
        <i className="fa-solid fa-angles-left"></i>
        Go back
      </div>
    </div>
  );
};

export default Login;
