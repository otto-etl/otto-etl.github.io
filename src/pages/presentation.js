import React from "react";
import Layout from "@theme/Layout";

import { Container } from "@mui/system";
const Presentation = () => {
  return (
    <Layout
      title="Presentation"
      description="Presentation of the otto ETL Project"
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
          marginTop: "60px",
        }}
      >
        <h1>otto ETL Presentation</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/uHGShqcAHlQ"
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
