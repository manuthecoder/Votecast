import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Card from "@mui/material/Card";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import { Option } from "./Option";
import React from "react";

function PollCard({ data }) {
  const [voted, setVoted] = React.useState<boolean>(false);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={voted ? 4 : 5}>
          <Card
            sx={{
              maxHeight: "calc(100vh - 200px)",
              mt: 2,
              overflow: "auto",
              p: 3,
              borderRadius: 5,
            }}
            variant="outlined"
          >
            <img
              src={data.banner}
              style={{
                width: "100%",
                borderRadius: "28px",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <Typography variant="h3" sx={{ mb: 2, fontWeight: "900", mt: 2 }}>
              {data.name}
            </Typography>
            <Typography variant="h6" sx={{ mb: 2, mt: 2 }}>
              {data.description}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={voted ? 5 : 7}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: 5,
              maxHeight: "calc(100vh - 200px)",
              mt: 2,
              height: "100%",
              overflow: "auto",
              p: 3,
            }}
            variant="outlined"
          >
            <Box sx={{ width: "100%" }}>
              {data.options &&
                [...data.options].map((option, id) => (
                  <Option
                    option={option}
                    key={id}
                    id={id}
                    setVoted={setVoted}
                    voted={voted}
                  />
                ))}
            </Box>
          </Card>
        </Grid>
        {voted && (
          <Grid item xs={3}>
            <Card
              sx={{
                borderRadius: 5,
                maxHeight: "calc(100vh - 200px)",
                mt: 2,
                height: "100%",
                overflow: "auto",
                p: 3,
                position: "relative",
              }}
              variant="outlined"
            >
              <AppBar
                position="absolute"
                sx={{
                  top: 0,
                  left: 0,
                  borderBottom: "1px solid #ddd",
                  background: "#eee",
                }}
                elevation={0}
              >
                <Toolbar>
                  <Typography>Chat</Typography>
                </Toolbar>
              </AppBar>
            </Card>
          </Grid>
        )}
      </Grid>
    </>
  );
}

export function Poll({ data }: any) {
  const isLoading = !data;
  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container sx={{ mt: 4 }}>
        {isLoading ? "Loading..." : <PollCard data={data} />}
      </Container>
    </Box>
  );
}
