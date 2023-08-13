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
        className="landing-page"
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
        <Box sx={{ marginBottom: "150px" }}>
          <img src="gif/homepage_workflow_fast.gif" />
        </Box>
        <Box
          sx={{
            background: "#F6F6F6",
            padding: "140px 0",
            width: "100%",
            borderRadius: 4,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "var(--ifm-color-primary)",
              textAlign: "center",
              fontWeight: "600",
              marginBottom: "30px",
            }}
          >
            Why use Otto?
          </Typography>
          <Typography
            variant="p"
            component="p"
            sx={{
              margin: "0 auto",
              fontSize: "22px",
              maxWidth: "640px",
              textAlign: "center",
            }}
          >
            Otto allows you to extract, transform and load data within an
            intuitive node-based UI. Build automated workflows that are executed
            at scheduled intervals and track your workflows' performance with
            logging and metrics.
          </Typography>
        </Box>
        <Box sx={{ margin: "140px 0" }}>
          <Typography
            variant="h2"
            sx={{
              color: "var(--ifm-color-primary)",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            ETL Features
          </Typography>

          <Features />
        </Box>
        <Box
          sx={{
            marginBottom: "140px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "var(--ifm-color-primary)",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            Logging
          </Typography>
          <Typography
            variant="p"
            component="p"
            sx={{
              textAlign: "center",
              fontSize: "22px",
              maxWidth: "460px",
              margin: "30px auto 40px",
            }}
          >
            Workflow logs allow you to review previous executions and diagnose
            workflow failures
          </Typography>
          <img src="img/graphs/workflow.png" />
        </Box>
        <Box sx={{ marginBottom: "140px" }}>
          <Typography
            variant="h2"
            sx={{
              color: "var(--ifm-color-primary)",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            Metrics
          </Typography>
          <Typography
            variant="p"
            component="p"
            sx={{
              textAlign: "center",
              fontSize: "22px",
              maxWidth: "660px",
              margin: "30px auto 40px",
            }}
          >
            Metrics allow you to view the performance of your workflow and
            pinpoint issues when things go wrong
          </Typography>
          <img src="img/graphs/metricsSS.png" />
        </Box>
      </Container>
    </Layout>
  );
}
