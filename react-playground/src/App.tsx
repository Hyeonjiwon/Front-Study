import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import SampleComponent from "./pages/SampleComponentPage";
import SampleLoginPage from "./pages/SampleLoginPage";
import SampleSerchPage from "./pages/SampleSearchPage";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sample-component" element={<SampleComponent />} />
          <Route path="/sample-login" element={<SampleLoginPage />} />
          <Route path="/sample-search" element={<SampleSerchPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
