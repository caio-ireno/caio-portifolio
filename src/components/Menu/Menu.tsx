import { Box, Button, useTheme } from "@mui/material";
import ireno from "../../assets/irenoOpen.png";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { useAppThemeContext } from "../../context/ThemeContext";
import { Moon, Sun } from "@phosphor-icons/react";

interface MenuProps {
  children: React.ReactNode;
}
export const MobileMenu: React.FC<MenuProps> = ({ children }) => {
  const { toggleTheme, themeName } = useAppThemeContext();
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      sx={{ backgroundColor: theme.palette.background.default }}
      position={"absolute"}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        position={"fixed"}
        top={0}
        gap={3}
        pt={1}
        pb={1}
        sx={{ backgroundColor: theme.palette.background.default }}
        width={"100%"}
      >
        <Box pl={5} component="img" src={ireno} width={"8vh"} height={"8vh"} />
        <Button onClick={toggleTheme}>
          {themeName === "light" ? (
            <Sun size={30} color={theme.palette.secondary.main} />
          ) : (
            <Moon size={30} color={theme.palette.secondary.main} />
          )}
        </Button>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
          pr={5}
        >
          <a
            href="https://www.linkedin.com/in/caio-eduardo-ireno-84941a142/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={40} color="#2cb67d" />
          </a>
          <a
            href="https://github.com/caio-ireno"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare size={40} color="#2cb67d" />
          </a>
        </Box>
      </Box>

      <Box>{children}</Box>
    </Box>
  );
};
