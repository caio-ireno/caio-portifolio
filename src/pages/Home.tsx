import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import img from "../assets/caio_1.jpeg";

export default function HomeCard() {
  const theme = useTheme();
  return (
    <Box
      width={"100%"}
      sx={{ backgroundColor: theme.palette.background.default }}
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"100vh"}
      gap={3}
    >
      <Box
        component="img"
        src={img}
        alt="caio"
        width={{ xs: "35vh", md: "35vh" }}
        height={{ xs: "35vh", md: "40vh" }}
        mb={{ xs: "1rem", sm: 0 }}
        borderRadius={5}
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={3}
        width={{ xs: "90%", sm: "70%", md: "50%" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box display="flex">
          <Typography
            sx={{
              fontWeight: "800",
            }}
            color={theme.palette.secondary.contrastText}
            variant="h3"
            fontSize={{ xs: "2rem", md: "2.5rem" }}
          >
            Hi, I'm
          </Typography>
          <Typography
            fontWeight={"bold"}
            color="#7f5af0"
            variant="h3"
            fontSize={{ xs: "2rem", md: "2.5rem" }}
            ml={1}
          >
            Caio Ireno
          </Typography>
          <Typography fontSize={{ xs: "2rem", md: "3rem" }} variant="h3">
            🖖
          </Typography>
        </Box>
        <Box width={{ sm: "100%", md: "70%" }}>
          <Typography
            fontSize={22}
            color="white"
            align="justify"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            I'm a creative software engineer capable of creating amazing
            websites and apps with front-end and back-end skills. My creativity
            allows me to find innovative solutions to development challenges.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
