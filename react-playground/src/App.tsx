import React from "react";
import Button from "@mui/material/Button";

const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
};

export default App;
