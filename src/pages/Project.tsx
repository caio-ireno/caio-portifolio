import { Box, Typography, useTheme } from "@mui/material";
import imgUrla from "../assets/urla.png";
import imgContrax from "../assets/ondasdeparto.png";
import imgAgenda from "../assets/agendapessoal.png";

import CardProject from "../components/Card/CardProject";

export default function Project() {
  const { palette } = useTheme();

  return (
    <Box
      width={"100%"}
      sx={{ backgroundColor: palette.background.default }}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"100vh"}
      gap={5}
      pt={10}
    >
      <Typography variant="h3" fontWeight={"bold"} color="#7f5af0">
        Projects
      </Typography>

      <CardProject
        name={"WEB - Urla Sorvetes"}
        description="Website developed for an ice cream chain in the region of Sorocaba. The website was created using React, Typescript and Material UI for the Front End, making it fully responsive for mobile and other devices. The back end was created in Laravel, including a user authentication system."
        url="https://www.youtube.com/watch?v=usrdXz579AI"
        img={imgUrla}
        skills={[
          { id: 1, name: "Laravel" },
          { id: 2, name: "React" },
          { id: 3, name: "TypeScript" },
          { id: 4, name: "MySql" },
          { id: 5, name: "Material UI" },
        ]}
      />

      <CardProject
        name={"MOBILE - Ondas de Parto"}
        description="Application developed for health professionals who work with pregnant women. Ondas de Parto controls the frequency of contractions.
        The app was built using React Native, Typescript and Firebase and features codePush (OTA) and sentry (crash reporting platform)."
        url="https://github.com/caio-ireno/portifolio"
        img={imgContrax}
        skills={[
          { id: 1, name: "React Native" },
          { id: 2, name: "TypeScript" },
          { id: 3, name: "Native Base" },
          { id: 4, name: "CodePush" },
          { id: 5, name: "Sentry" },
        ]}
      />

      <CardProject
        name={"MOBILE - Agenda Profissional"}
        description="Application developed to manage and control your patients and customers. The app was built using React Native, Typescript, Style Components and RealmDB and features codePush (OTA) and sentry (crash reporting platform)."
        url="https://github.com/caio-ireno/TimeController"
        img={imgAgenda}
        skills={[
          { id: 1, name: "React Native" },
          { id: 2, name: "TypeScript" },
          { id: 3, name: "Style Components" },
          { id: 4, name: "CodePush" },
          { id: 5, name: "Sentry" },
          { id: 6, name: "RealmDB" },
        ]}
      />
    </Box>
  );
}
