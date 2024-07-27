import { Typography, Box } from "@mui/material";

interface LogoProps {
  // 로고에 텍스트를 추가할 수 있는 경우를 대비하여 `text` 프로퍼티를 추가할 수 있습니다.
  text?: string;
  // 로고 이미지 URL을 프로퍼티로 받을 수 있습니다.
  imageSrc?: string;
  // 이미지와 텍스트가 없을 경우 기본 로고를 제공할 수 있습니다.
}

const Logo = ({ text, imageSrc }: LogoProps) => {
  return (
    <>
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={text || "Logo"}
          style={{ height: "40px", width: "auto" }} // 로고 이미지의 크기를 설정합니다.
        />
      ) : (
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "primary.main", // MUI 테마의 primary 색상을 사용합니다.
          }}
        >
          {text || "Default Logo"}
        </Typography>
      )}
    </>
  );
};

export default Logo;
