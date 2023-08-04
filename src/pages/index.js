import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Button from "@mui/material/Button";
import Features from "../components/Features";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";

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
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "var(--ifm-color-primary)",
          }}
        >
          A better way to build ETL pipelines
        </Typography>
        <Typography variant="p" component="p" sx={{ textAlign: "center" }}>
          Otto is an open source <strong>ETL</strong> automation tool designed
          for <strong>Javascript</strong> developers
        </Typography>
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
        <Typography
          variant="h2"
          sx={{ color: "var(--ifm-color-primary)", textAlign: "center" }}
        >
          Why use otto?
        </Typography>
        <Typography variant="p" component="p" sx={{ textAlign: "center" }}>
          Otto allows you to extract, transform and load data within an
          intuitive node-based UI. Build automated workflows that are executed
          at scheduled intervals and track your workflows' performance with
          logging and metrics.
        </Typography>
        <Features />
        <Typography
          variant="h2"
          sx={{ color: "var(--ifm-color-primary)", textAlign: "center" }}
        >
          Logging
        </Typography>
        <Typography variant="p" component="p" sx={{ textAlign: "center" }}>
          Workflow logs allow you to review previous executions and diagnose
          workflow failures
        </Typography>
        <img src="img/screenshots/entire_workflow.png" />
        <Typography
          variant="h2"
          sx={{ color: "var(--ifm-color-primary)", textAlign: "center" }}
        >
          Metrics
        </Typography>
        <Typography variant="p" component="p" sx={{ textAlign: "center" }}>
          Metrics allow you to view the performance of your workflow and
          pinpoint issues when things go wrong
        </Typography>
        <img src="img/screenshots/metric_page.png" />
      </Container>
    </Layout>
  );
}
