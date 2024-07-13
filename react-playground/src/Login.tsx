import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert(`Username: ${username}, Password: ${password}`);
    // 실제 로그인 처리 로직을 여기에 구현할 수 있습니다.
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: 20 }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: 20 }}
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        로그인
      </Button>
    </div>
  );
};

export default Login;
