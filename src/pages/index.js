import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import HomepageFeatures from "../components/HomepageFeatures";
import Wave from "../components/Wave";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { Stack } from "@mui/system";

export default function Home() {
  return (
    <Layout>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
          marginTop: "60px",
        }}
      >
        <h1 className="otto_title">A better way to build ETL pipelines</h1>
        <p className="otto_subtitle">
          Otto is an open source <strong>ETL</strong> automation tool designed
          for <strong>Javascript</strong> developers
        </p>
        <Link to="/case_study" className="hover:no-underline">
          <Button
            sx={{
              background: "var(--ifm-color-primary)",
            }}
            variant="contained"
          >
            Read Case Study
          </Button>
        </Link>
        <img src="gif/homepage_workflow_fast.gif" />
        <h2>Why use otto?</h2>
        <p>
          Otto allows you to extract, transform and load data within an
          intuitive node-based UI. Build automated workflows that are executed
          at scheduled intervals and track your workflows’ performance with
          logging and metrics.
        </p>
      </Container>
      <Wave />
    </Layout>
  );
}
