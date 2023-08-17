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
            textAlign: "center",
            fontWeight: "600",
            color: "var(--ifm-color-primary)",
            maxWidth: "750px",
            fontSize: "36px",
            "@media (min-width:640px)": {
              fontSize: "48px",
            },
            "@media (min-width:1024px)": {
              fontSize: "72px",
            },
          }}
        >
          A better way to build ETL pipelines
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "18px",
            maxWidth: "460px",
            marginTop: "25px",
            "@media (min-width:640px)": {
              fontSize: "22px",
              marginTop: "40px",
            },
            "@media (min-width:1024px)": {
              marginTop: "50px",
            },
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
              margin: "30px 0 40px",
              fontFamily: "Inter",
              "&:hover": {
                backgroundColor: "#2433B2",
              },
              "@media (min-width:640px)": {
                margin: "30px 0 60px",
              },
              "@media (min-width:1024px)": {
                margin: "30px 0 80px",
              },
            }}
            variant="contained"
          >
            Read Case Study
          </Button>
        </Link>
        <Box
          sx={{
            marginBottom: "75px",
            "@media (min-width:640px)": {
              marginBottom: "112px",
            },
            "@media (min-width:1024px)": {
              marginBottom: "150px",
            },
          }}
        >
          <img
            src="gif/homepage_workflow_copy.gif"
            style={{ borderRadius: "8px" }}
          />
        </Box>
        <Box
          sx={{
            background: "var(--ifm-color-primary-ottobg)",
            border: "1px solid var(--ifm-color-primary-ottoborder)",
            padding: "50px 20px",
            width: "100%",
            borderRadius: 4,
            "@media (min-width:640px)": {
              padding: "100px 20px",
            },
            "@media (min-width:1024px)": {
              padding: "140px 20px",
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "var(--ifm-color-primary)",
              textAlign: "center",
              fontWeight: "600",
              marginBottom: "30px",
              fontSize: "36px",
              "@media (min-width:640px)": {
                fontSize: "48px",
              },
              "@media (min-width:1024px)": {
                fontSize: "60px",
              },
            }}
          >
            Why use Otto?
          </Typography>
          <Typography
            variant="p"
            component="p"
            sx={{
              margin: "0 auto",
              fontSize: "18px",
              maxWidth: "640px",
              textAlign: "center",
              "@media (min-width:640px)": {
                fontSize: "22px",
              },
            }}
          >
            Otto allows you to extract, transform and load data within an
            intuitive node-based UI. Build automated workflows that are executed
            at scheduled intervals and track your workflows' performance with
            logging and metrics.
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "70px 0",
            "@media (min-width:640px)": {
              margin: "105px 0",
            },
            "@media (min-width:1024px)": {
              margin: "140px 0",
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "var(--ifm-color-primary)",
              textAlign: "center",
              fontWeight: "600",
              fontSize: "36px",
              "@media (min-width:640px)": {
                fontSize: "48px",
              },
              "@media (min-width:1024px)": {
                fontSize: "60px",
              },
            }}
          >
            ETL Features
          </Typography>

          <Features />
        </Box>
        <Box
          sx={{
            marginBottom: "70px",
            "@media (min-width:640px)": {
              marginBottom: "105px",
            },
            "@media (min-width:1024px)": {
              marginBottom: "140px",
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "var(--ifm-color-primary)",
              textAlign: "center",
              fontWeight: "600",
              fontSize: "36px",
              "@media (min-width:640px)": {
                fontSize: "48px",
              },
              "@media (min-width:1024px)": {
                fontSize: "60px",
              },
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
          <img src="gif/logs.gif" style={{ borderRadius: "8px" }} />
        </Box>
        <Box
          sx={{
            marginBottom: "70px",
            "@media (min-width:640px)": {
              marginBottom: "70px",
            },
            "@media (min-width:1024px)": {
              marginBottom: "70px",
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "var(--ifm-color-primary)",
              textAlign: "center",
              fontWeight: "600",
              fontSize: "36px",
              "@media (min-width:640px)": {
                fontSize: "48px",
              },
              "@media (min-width:1024px)": {
                fontSize: "60px",
              },
            }}
          >
            Metrics
          </Typography>
          <Typography
            variant="p"
            component="p"
            sx={{
              textAlign: "center",
              fontSize: "18px",
              maxWidth: "660px",
              margin: "30px auto 40px",
              "@media (min-width:640px)": {
                fontSize: "22px",
              },
            }}
          >
            Metrics allow you to view the performance of your workflow and
            pinpoint issues when things go wrong
          </Typography>
          <img src="img/graphs/metricsSS.png" style={{ borderRadius: "8px" }} />
        </Box>
        <Link to="/case_study" className="hover:no-underline">
          <Button
            size="large"
            sx={{
              background: "var(--ifm-color-primary)",
              margin: "0 0 40px",
              fontFamily: "Inter",
              "&:hover": {
                backgroundColor: "#2433B2",
              },
              "@media (min-width:640px)": {
                margin: "0px 0 60px",
              },
              "@media (min-width:1024px)": {
                margin: "0px 0 70px",
              },
            }}
            variant="contained"
          >
            Read Case Study
          </Button>
        </Link>
      </Container>
    </Layout>
  );
}
