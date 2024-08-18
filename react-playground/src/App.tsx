import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GlobalStyle from "./components/style/GlobalStyle";
import JobPostDetailPage from "./pages/JobPostDetailPage";
import Main from "./pages/Main";
import SampleComponent from "./pages/SampleComponentPage";
import SampleLoginPage from "./pages/SampleLoginPage";
import SampleMapSearchPage from "./pages/SampleMapSearchPage";
import SampleSerchPage from "./pages/SampleSearchPage";
import theme from "./theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CssBaseline />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/sample-component" element={<SampleComponent />} />
            <Route path="/sample-login" element={<SampleLoginPage />} />
            <Route path="/sample-search" element={<SampleSerchPage />} />
            <Route path="/sample-map" element={<SampleMapSearchPage />} />
            <Route path="/job-post/:id" element={<JobPostDetailPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
