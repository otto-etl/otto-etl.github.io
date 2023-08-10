import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Button from "@mui/material/Button";
import Features from "../components/Features";
import { Container } from "@mui/system";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Layout>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "80px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontWeight: "600",
            color: "var(--ifm-color-primary)",
            fontSize: "72px",
            maxWidth: "750px",
          }}
        >
          A better way to build ETL pipelines
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "22px",
            maxWidth: "460px",
            marginTop: "50px",
          }}
        >
          Otto is an open source <strong>ETL</strong> automation tool designed
          for <strong>Javascript</strong> developers
        </Typography>
        <Link to="/case_study" className="hover:no-underline">
          <Button
            size="large"
            sx={{
              background: "var(--ifm-color-primary)",
              margin: "30px 0 80px",
              "&:hover": {
                backgroundColor: "#2433B2",
              },
            }}
            variant="contained"
          >
            Read Case Study
          </Button>
        </Link>
        <img src="gif/homepage_workflow_fast.gif" />
        <Box
          sx={{
            background: "#F6F6F6",
          }}
        >
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
        </Box>
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
