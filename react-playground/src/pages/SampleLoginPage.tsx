import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      alert("사용자 이름과 비밀번호를 입력해주세요.");
      return;
    }

    // TODO: 서버에 요청을 보내고, 응답 처리
    try {
      alert(`Username: ${username}, Password: ${password}`);

      // 서버에 요청을 보내는 예시
      // const response = await fetch('http://yourserver.com/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ username, password }),
      // });
      // const data = await response.json();
      // console.log(data); // 서버 응답을 확인하거나 상태를 변경하는 등의 작업을 수행
    } catch (error) {
      console.error("Error during login:", error);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
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
