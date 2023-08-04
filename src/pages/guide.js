import React from "react";
import Layout from "@theme/Layout";
import Wave from "../components/Wave";
import { Container } from "@mui/system";
const Guide = () => {
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
        <h1>How to use otto</h1>
      </Container>
      <Wave />
    </Layout>
  );
};

export default Guide;
