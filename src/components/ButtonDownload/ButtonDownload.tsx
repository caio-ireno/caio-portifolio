import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

export const ButtonDownload = () => {
  //teste
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <a style={{ textDecoration: "none" }} href="/" download>
      <Box
        display={"flex"}
        gap={2}
        borderRadius={2}
        sx={{ backgroundColor: "#7f5af0" }}
        px={{ xs: 1, sm: 2 }}
        py={{ xs: 1, sm: 2 }}
        mr={2}
      >
        {!smDown && <ArrowCircleDownIcon color="primary" />}
        <Typography
          fontSize={{ xs: 10, sm: 12, md: 14, lg: 16 }}
          color="#010101"
        >
          Download Resume
        </Typography>
      </Box>
    </a>
  );
};
