import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#224A99",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      primary: "#000000", // 기본 글자 색상 설정
    },
  },
  typography: {
    fontFamily: '"Noto Sans CJK KR", sans-serif',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
