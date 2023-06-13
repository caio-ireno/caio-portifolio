import { Box, Grid, Typography, useTheme } from "@mui/material";

export default function Skills() {
  const { palette } = useTheme();
  return (
    <Box
      width={"100%"}
      sx={{ backgroundColor: palette.primary.dark }}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      gap={5}
      minHeight={"calc(100vh - 200px)"}
      pt={10}
      pb={10}
    >
      <Typography variant="h3" fontWeight={"bold"} color="#7f5af0">
        Skills
      </Typography>

      <Box display={"flex"} width={"100%"}>
        <Grid
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          gap={2}
          container
        >
          <Grid
            sx={{ backgroundColor: palette.primary.main }}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            height={"250px"}
            item
            xs={10}
            md={5}
            p={3}
            gap={2}
            borderRadius={1}
          >
            <Typography
              fontSize={28}
              fontWeight={"bold"}
              color={palette.secondary.main}
            >
              Front-End
            </Typography>
            <Typography fontSize={20} color={palette.primary.contrastText}>
              Experience with ReactJS, React Native, Typescript, NextJS, Context
              API and React Hooks in addition to CSS frameworks such as Chakra,
              Tailwind, Material UI and Style Components. I create responsive
              and organized apps.
            </Typography>
          </Grid>
          <Grid
            sx={{ backgroundColor: palette.primary.main }}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"center"}
            height={"250px"}
            item
            xs={10}
            md={5}
            p={3}
            gap={2}
            borderRadius={1}
          >
            <Typography
              fontSize={28}
              fontWeight={"bold"}
              color={palette.secondary.main}
            >
              Back-End
            </Typography>
            <Typography fontSize={20} color={palette.primary.contrastText}>
              Experience with NodeJS, PHP, Laravel, MySQL, RealmDB and GraphQL.
              Development of web systems using MVC architecture, creation of
              APIs and integration with databases. Familiarity with technologies
              such as Composer, Git, Docker.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
