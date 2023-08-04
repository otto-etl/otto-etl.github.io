import React from "react";
import { Container, Stack } from "@mui/system";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Features = () => {
  const boxStyles = {
    border: 1,
    borderColor: "var(--ifm-color-primary-outline)",
    borderRadius: "5%",
    width: "15rem",
    height: "15rem",
    padding: 1,
  };

  return (
    <Container>
      <Stack
        sx={{ mt: 10 }}
        direction="row"
        spacing={3}
        maxWidth="auto"
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{ ...boxStyles }}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-clock"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <Typography variant="h5" sx={{ color: "var(--ifm-color-primary)" }}>
            Schedule
          </Typography>
          <Typography variant="p">
            Schedule workflows to run at regular intervals
          </Typography>
        </Box>
        <Box sx={{ ...boxStyles }}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-database"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M3 5V19A9 3 0 0 0 21 19V5" />
              <path d="M3 12A9 3 0 0 0 21 12" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-up"
            >
              <path d="m5 12 7-7 7 7" />
              <path d="M12 19V5" />
            </svg>
          </div>
          <Typography variant="h5" sx={{ color: "var(--ifm-color-primary)" }}>
            Extract
          </Typography>
          <Typography variant="p">
            Extract data from various sources. Integrations include PostgreSQL,
            MongoDB and API requests.
          </Typography>
        </Box>
        <Box sx={{ ...boxStyles }}>
          <div>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35 20C35 16.0218 33.4196 12.2064 30.6066 9.3934C27.7936 6.58035 23.9782 5 20 5C15.8066 5.01578 11.7816 6.65204 8.76667 9.56667L5 13.3333"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 5V13.3333H13.3333"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 20C5 23.9782 6.58035 27.7936 9.3934 30.6066C12.2064 33.4196 16.0218 35 20 35C24.1934 34.9842 28.2184 33.348 31.2333 30.4333L35 26.6667"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.666 26.6665H34.9993V34.9998"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 13.3333V14.9999"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 25V26.6667"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.6667 20H25"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.0007 20H13.334"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24.9999 15L23.5332 16.4667"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.4667 23.5334L15 25.0001"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24.9999 25.0004L23.5332 23.5337"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.4667 16.4667L15 15"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <Typography variant="h5" sx={{ color: "var(--ifm-color-primary)" }}>
            Transform
          </Typography>
          <Typography variant="p">
            Transform extracted code using an integrated code editor and
            JavaScript.
          </Typography>
        </Box>
        <Box sx={{ ...boxStyles }}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-database"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M3 5V19A9 3 0 0 0 21 19V5" />
              <path d="M3 12A9 3 0 0 0 21 12" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-down"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </div>
          <Typography variant="h5" sx={{ color: "var(--ifm-color-primary)" }}>
            Load
          </Typography>
          <Typography variant="p">
            Load transformed data into a database of your choosing. Otto is
            compatible with all databases.
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default Features;
