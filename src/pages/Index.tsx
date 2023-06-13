import { Box } from "@mui/material";
import HomeCard from "./Home";
import Skills from "./Skills";
import Project from "./Project";
import Footer from "../components/Footer/Footer";

export const Index: React.FC = () => {
  return (
    <Box>
      <HomeCard />
      <Skills />
      <Project />
      <Box
        display={"flex"}
        width={"100%"}
        height={"100px"}
        alignItems={"center"}
        justifyContent={"end"}
        pt={{ xs: 3, sm: 10 }}
      ></Box>
      <Footer />
    </Box>
  );
};
