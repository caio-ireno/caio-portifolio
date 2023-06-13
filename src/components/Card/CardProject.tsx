import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CardSkill from "./CardSkill";
interface CardProjectProps {
  name: string;
  description: string;
  url: string;
  img: string;
  skills: { id: number; name: string }[];
}

export default function CardProject(props: CardProjectProps) {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      width={"70%"}
      sx={{ backgroundColor: theme.palette.primary.dark }}
      display={"flex"}
      flexDirection={"column"}
      gap={5}
      p={3}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={{ sm: 2, md: 5, lg: 10 }}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {!smDown && (
          <Box
            component={"img"}
            src={props.img}
            alt="caio"
            width={{ sm: "25vh", md: "40vh" }}
            height={{ sm: "25vh", md: "30vh" }}
            mb={{ xs: "1rem", sm: 0 }}
            borderRadius={5}
          />
        )}
        <Divider orientation="vertical" flexItem />
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          <a
            style={{
              textDecoration: "none",
            }}
            href={props.url}
            target="_blank"
            rel="noreferrer"
          >
            <Typography
              fontSize={{ sm: 15, md: 20, lg: 25 }}
              color={theme.palette.secondary.main}
            >
              {props.name}
            </Typography>
          </a>
          <Typography
            fontSize={{ sm: 12, md: 15, lg: 18 }}
            color={theme.palette.primary.contrastText}
            align="justify"
          >
            {props.description}
          </Typography>
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={2}
        width={"100%"}
      >
        {props.skills.map((skill) => {
          return (
            <Box key={skill.id}>
              <CardSkill name={skill.name} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
