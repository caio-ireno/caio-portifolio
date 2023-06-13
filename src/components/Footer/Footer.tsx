import { Box } from "@mui/system";
import ireno from "../../assets/irenoClose.png";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      px={5}
      pb={1}
      pt={{ xs: 3, sm: 10 }}
      display="flex"
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box component="img" src={ireno} width={"8vh"} height={"8vh"} />
      <Typography fontSize={15} color="#fffffe">
        Developed by Caio Ireno
      </Typography>
    </Box>
  );
}
