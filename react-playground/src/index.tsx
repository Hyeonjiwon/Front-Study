import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const naverMapClientId = process.env.REACT_APP_NAVER_MAP_CLIENT_ID;

const renderApp = () => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

if (naverMapClientId) {
  const script = document.createElement("script");
  script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${naverMapClientId}`;
  script.async = true;
  script.onload = renderApp;
  document.head.appendChild(script);
} else {
  console.error("네이버 지도 API 키가 설정되지 않았습니다.");
  renderApp();
}
