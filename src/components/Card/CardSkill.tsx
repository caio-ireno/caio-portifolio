import { Typography } from "@mui/material";
import { Box } from "@mui/system";
interface CardSkillProps {
  name: string;
}

export default function CardSkill(props: CardSkillProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#7f5af0",
      }}
      gap="5px"
      borderRadius="5px"
      display="flex"
      justifyContent={"center"}
      alignItems="center"
      px={3}
    >
      <Typography fontSize={"15px"} color="#fffffe">
        {props.name}
      </Typography>
    </Box>
  );
}
