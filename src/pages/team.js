import React from "react";
import Layout from "@theme/Layout";
import Member from "../components/member";
import { Typography, Stack } from "@mui/material";

import { Container } from "@mui/system";
const team = [
  {
    name: "Jing Zhu",
    image: "img/members/Jing.jpeg",
    website: "https://jingzwork.space/",
    github: "https://github.com/JingZhu89",
    linkedin: "https://www.linkedin.com/in/jingzhumsscm/",
    email: "jing.harrell@gmail.com",
  },
  {
    name: "Joe Webster",
    image: "img/members/Joe.jpeg",
    website: "https://joeswebster.com/",
    github: "https://github.com/joewebsta",
    linkedin: "https://www.linkedin.com/in/joeswebster/",
    email: "Joseph.scott.webster@gmail.com",
  },
  {
    name: "Katherine Morayati",
    image: "img/members/Katherine.jpeg",
    website: "http://katherinemorayati.com/",
    github: "https://github.com/katstasaph",
    linkedin: "https://www.linkedin.com/in/katherine-morayati-a1a220288/",
    email: "katherinemorayati@gmail.com",
  },
  {
    name: "Matthew Sisserson",
    image: "img/members/Mat.jpeg",
    website: "https://masisserson.dev/",
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
          marginTop: "40px",
          justifyContent: "center",
          "@media (min-width:640px)": {
            marginTop: "60px",
          },
          "@media (min-width:1024px)": {
            marginTop: "80px",
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "36px",
            color: "var(--ifm-color-primary)",
            fontWeight: 600,
            textAlign: "center",
            "@media (min-width:640px)": {
              fontSize: "48px",
            },
          }}
        >
          Otto Development Team
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            marginTop: "50px",
            textAlign: "center",

            "@media (min-width:640px)": {
              flexDirection: "row",

              flexWrap: "wrap",
              justifyContent: "center",
            },
            "@media (min-width:1024px)": {},
          }}
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
