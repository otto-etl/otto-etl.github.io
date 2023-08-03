import React from "react";
import Layout from "@theme/Layout";
import Wave from "../components/Wave";
import { Container } from "@mui/system";
const Presentation = () => {
  return (
    <Layout
      title="Presentation"
      description="Presentation of the otto ETL Project"
    >
      <Container alignItems="center" justify="center">
        <h1 style={{ textAlign: "center" }}>otto ETL Presentation</h1>
        <iframe
          width="650"
          height="400"
          src="https://www.youtube.com/watch?v=uHGShqcAHlQ&themeRefresh=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </Container>
      <Wave />
    </Layout>
  );
};

export default Presentation;
