import React from "react";
import Layout from "@theme/Layout";
import Member from "../components/member";
import Stack from "@mui/material/Stack";

import { Container } from "@mui/system";
const team = [
  {
    name: "Jing Zhu",
    image: "img/members/Jing.jpeg",
    website: "",
    github: "https://github.com/JingZhu89",
    linkedin: "https://www.linkedin.com/in/jingzhumsscm/",
    email: "jing.harrell@gmail.com",
  },
  {
    name: "Joe Webster",
    image: "img/members/Joe.jpeg",
    website: "/",
    github: "https://github.com/joewebsta",
    linkedin: "linkedin.com/in/joeswebster/",
    email: "Joseph.scott.webster@gmail.com",
  },
  {
    name: "Katherine Morayati",
    image: "img/members/Katherine.jpeg",
    website: "/",
    github: "https://github.com/katstasaph",
    linkedin: "",
    email: "katherinemorayati@gmail.com",
  },
  {
    name: "Matthew Sisserson",
    image: "img/members/Mat.jpeg",
    website: "/",
    github: "https://github.com/MASisserson",
    linkedin: "https://linkedin.com/in/matthew-sisserson-077b54a0",
    email: "masisserson@gmail.com",
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
