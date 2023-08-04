import React from "react";
import Layout from "@theme/Layout";
import Member from "../components/member";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";

import { Container } from "@mui/system";
const team = [
  {
    name: "Jing Zhu",
    image: "img/members/Jing.JPG",
    website: "",
    github: "https://github.com/JingZhu89",
    linkedin: "https://www.linkedin.com/in/jingzhumsscm/",
    email: "jing.harrell@gmail.com",
  },
  {
    name: "Joe Webster",
    image: "",
    website: "/",
    github: "",
    linkedin: "",
    email: "",
  },
  {
    name: "Katherine Morayati",
    image: "",
    website: "/",
    github: "",
    linkedin: "",
    email: "",
  },
  {
    name: "Matthew Sisserson",
    image: "",
    website: "/",
    github: "",
    linkedin: "",
    email: "",
  },
];

const Team = () => {
  return (
    <Layout>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
          marginTop: "60px",
          overflow: "scroll",
        }}
      >
        <h1>otto ETL Development Team</h1>
        <Stack
          sx={{ mt: 10 }}
          direction="row"
          spacing={1.5}
          maxWidth="auto"
          textAlign="center"
          alignItems="center"
        >
          {team.map((member) => (
            <Member key={member.name} member={member} />
          ))}
        </Stack>
      </Container>
    </Layout>
  );
};

export default Team;
