import React from "react";
import Layout from "@theme/Layout";

import { Container } from "@mui/system";
import { Typography } from "@mui/material";
const Presentation = () => {
  return (
    <Layout
      title="Presentation"
      description="Presentation of the Otto ETL Project"
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
          marginTop: "40px",
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
          Otto Presentation
        </Typography>
        <iframe
          width="650"
          height="400"
          src="https://www.youtube.com/embed/s0p7SC392L4?si=1ShbYJuEUHixKBjn"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Container>
    </Layout>
  );
};

export default Presentation;
