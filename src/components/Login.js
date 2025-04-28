import React, { useState } from "react";
import { toast } from "react-toastify";
import { loginApi } from "../services/UserService";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Email || Password is required!");
      return;
    }
    let res = await loginApi(email, password);
    if (res && res.token) {
      localStorage.setItem("token", res.token);
    }
  };
  return (
    <div className="login-container col-12 col-sm-4">
      <div className="title">Login</div>
      <div className="text">Email or Username</div>
      <input
        type="text"
        placeholder="Email or username..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password..."
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
