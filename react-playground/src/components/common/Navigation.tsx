import { useState } from "react";
import Box from "@mui/material/Box";
import LinkItem from "./LinkItem";

interface Link {
  to: string;
  text: string;
}

interface NavigationProps {
  links: Link[];
}

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

const Navigation = ({ links }: NavigationProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        typography: "body1",
        "& > :not(style) ~ :not(style)": {
          ml: 5,
        },
      }}
      onClick={preventDefault}
    >
      {links.map((link, index) => (
        <LinkItem key={index} to={link.to} text={link.text} />
      ))}
    </Box>
  );
};

export default Navigation;
