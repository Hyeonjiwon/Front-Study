import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

interface LinkItemProps {
  to: string;
  text: string;
}

const LinkItem = ({ to, text }: LinkItemProps) => {
  return (
    <Link
      component={RouterLink}
      to={to}
      sx={{
        textDecoration: "none",
        color: "gray", // 기본 링크 색상
        "&:visited": {
          color: "gray", // 방문한 링크 색상
        },
        "&:hover": {
          color: "darkgray", // 마우스 오버 시 링크 색상
        },
      }}
    >
      {text}
    </Link>
  );
};

export default LinkItem;
