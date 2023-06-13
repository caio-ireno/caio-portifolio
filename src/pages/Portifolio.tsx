import api from "../services/Api";
import { useEffect, useState } from "react";
// import githubProps from '../types/GithubProps';
import { Box } from "@mui/material";
interface GitProps {
  name: string;
  html_url: string;
  language: string;
  description: string;
  topics: [];
}
export default function Portifolio() {
  const [users, setUsers] = useState<GitProps[]>([]);
  useEffect(() => {
    api.get("/users/caio-ireno/repos").then((r) => {
      setUsers(r.data);
    });
  }, []);

  return (
    <Box
      width={"100%"}
      sx={{ backgroundColor: "#16161a" }}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"100vh"}
      gap={3}
    ></Box>
  );
}
